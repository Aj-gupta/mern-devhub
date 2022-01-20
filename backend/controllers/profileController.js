import Profile from '../models/profileModel.js'
import User from '../models/userModel.js'

async function getProfile(req, res) {
  try {
    const { userId } = req.user
    const profile = await Profile.findOne({ user: userId }).populate('user', [
      'name',
    ])

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' })
    }

    return res.json(profile)
  } catch (err) {
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function getProfiles(req, res) {
  try {
    const profiles = await Profile.find().populate('user', ['name'])
    return res.json(profiles)
  } catch (err) {
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function getProfileByUsername(req, res) {
  try {
    const { username } = req.params
    const userId = await User.findOne({ username }, { _id: 1 }).then((data) =>
      data._id.toString()
    )
    console.log(userId)
    const profile = await Profile.findOne({ user: userId }).populate('user', [
      'name',
    ])

    console.log(profile)
    return res.json(profile)
  } catch (err) {
    console.log(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function updateProfile(req, res) {
  try {
    const { userId } = req.user
    const details = req.body
    if (!details || !userId) {
      return res.status(404).json({ message: 'Please provide all details' })
    }
    let updateQuery = { user: userId }
    if (details.skills) {
      const { skills, ...rest } = details
      updateQuery = { ...rest, $addToSet: { skills: { $each: skills } } }
    }
    if (details.experience) {
      const { experience, ...rest } = details
      updateQuery = { ...rest, $push: { experience } }
    }
    if (details.education) {
      const { education, ...rest } = details
      updateQuery = { ...rest, $push: { education } }
    }
    updateQuery.user = userId
    // console.log(updateQuery)
    await Profile.updateOne({ _id: userId }, updateQuery, {
      runValidators: true,
      upsert: true,
      setDefaultsOnInsert: true,
    })

    return res.json({ message: 'success' })
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function deleteProfileFields(req, res) {
  try {
    const { userId } = req.user
    const user = await Profile.findOne({ _id: userId })
    const fields = req.body
    if (!user) {
      return res.status(404).json({ message: 'Profile not found' })
    }
    // console.log(user, fields)
    if (fields.skill) {
      user.skills = user.skills.filter((skill) => skill !== fields.skill)
      // console.log(user.skills)
      user.markModified('skills')
      await user.save()
    }

    if (fields.experience) {
      user.experience = user.experience.filter(
        (exp) => exp._id.toString() !== fields.experience
      )
      // console.log(user.experience)
      user.markModified('experience')
      await user.save()
    }

    if (fields.education) {
      user.education = user.education.filter(
        (edu) => edu._id.toString() !== fields.education
      )
      await user.save()
    }

    return res.json({ message: 'success' })
  } catch (err) {
    return res
      .status(err.code || 500)
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
