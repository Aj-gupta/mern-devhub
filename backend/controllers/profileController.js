import Profile from '../models/profileModel.js'
import User from '../models/userModel.js'

async function getProfile(req, res) {
  try {
    const { userId } = req.user
    const profile = await Profile.findOne({
      user: userId,
    }).populate('user', ['name', 'username'])

    if (!profile) {
      return res
        .status(404)
        .json({ message: 'Profile not found' })
    }

    return res.json(profile)
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || 'Server error' })
  }
}

async function getProfiles(req, res) {
  try {
    const profiles = await Profile.find(
      {},
      { user: 1, location: 1, status: 1, skills: 1 }
    ).populate('user', ['name', 'username'])
    return res.json(profiles)
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || 'Server error' })
  }
}

async function getProfileByUsername(req, res) {
  try {
    const { username } = req.params
    const userId = await User.findOne(
      { username },
      { _id: 1 }
    ).then((data) => data._id.toString())
    // console.log(userId)
    const profile = await Profile.findOne({
      user: userId,
    }).populate('user', ['name'])

    // console.log(profile)
    return res.json(profile)
  } catch (err) {
    console.log(err)
    if (err.name === 'ValidationError') {
      const errors = Object.keys(err.errors).map((key) => ({
        [key]: err.errors[key].message,
      }))
      return res
        .status(400)
        .json({ message: 'Validation Error', errors })
    }
    return res
      .status(500)
      .json({ message: err.message || 'Server error' })
  }
}

async function updateProfile(req, res) {
  try {
    const { userId } = req.user
    const details = req.body
    console.log(details)
    if (!details || !userId) {
      return res
        .status(404)
        .json({ message: 'Please provide all details' })
    }

    const profile = await Profile.findOne({ user: userId })
    if (!profile) {
      const createdProfile = await Profile.create({
        ...details,
        user: userId,
      })
      return res.status(201).json({
        message: 'Profile created',
        createdProfile,
      })
    }
    let updateQuery = { ...details }
    if (details.skills) {
      if (!Array.isArray(details.skills)) {
        return res.status(400).json({
          message: 'Please provide skills field as array',
        })
      }
      const { skills, ...rest } = details

      updateQuery = {
        ...rest,
        $addToSet: { skills: { $each: skills } },
      }
    }
    if (details.experience) {
      const { experience, ...rest } = details
      updateQuery = { ...rest, $push: { experience } }
    }
    if (details.education) {
      const { education, ...rest } = details
      updateQuery = { ...rest, $push: { education } }
    }
    // console.log(JSON.stringify(updateQuery))

    const updatedProfile = await Profile.findOneAndUpdate(
      { user: userId },
      updateQuery,
      {
        runValidators: true,
        new: true,
      }
    )
    // console.log('result', result)
    return res.json({
      message: 'Profile Successfully updated',
      profile: updatedProfile,
    })
  } catch (err) {
    console.log(err.code)
    console.error(err)
    if (err.name === 'ValidationError') {
      const errors = Object.keys(err.errors).map((key) => ({
        [key]: err.errors[key].message,
      }))
      return res
        .status(400)
        .json({ message: 'Validation Error', errors })
    }
    return res
      .status(500)
      .json({ message: err.message || 'Server error' })
  }
}

async function deleteProfileFields(req, res) {
  try {
    const { userId } = req.user
    const user = await Profile.findOne({ user: userId })
    const fields = req.body
    if (!user) {
      return res
        .status(404)
        .json({ message: 'Profile not found' })
    }
    // console.log(user, fields)
    console.log(fields)
    if (fields.skill) {
      user.skills = user.skills.filter(
        (skill) => skill !== fields.skill
      )
      // console.log(user.skills)
      user.markModified('skills')
      await user.save()
    }

    if (fields.experience) {
      user.experience = user.experience.filter(
        (exp) =>
          exp._id.toString() !== fields.experience._id
      )
      console.log(user.experience)
      user.markModified('experience')
      await user.save()
    }

    if (fields.education) {
      user.education = user.education.filter(
        (edu) => edu._id.toString() !== fields.education._id
      )
      user.markModified('education')
      await user.save()
    }

    return res.json({ message: 'success', fields })
  } catch (err) {
    console.error(err)
    if (err.name === 'ValidationError') {
      const errors = Object.keys(err.errors).map((key) => ({
        [key]: err.errors[key].message,
      }))
      return res
        .status(400)
        .json({ message: 'Validation Error', errors })
    }
    return res
      .status(500)
      .json({ message: err.message || 'Server error' })
  }
}
export {
  getProfile,
  updateProfile,
  getProfiles,
  getProfileByUsername,
  deleteProfileFields,
}
