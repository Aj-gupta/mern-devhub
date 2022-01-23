import { useContext, useReducer } from 'react'
import { Form } from '../styled/Form'
import { updateProfileReducer } from '../../redux/reducers/profileReducer'
import { AuthContext } from '../../context/AuthContext'
import { updateProfile } from '../../redux/actions/profileActions'

export default function EditProfile() {
  const { user } = useContext(AuthContext)
  const [{ data, loading, error }, dispatch] = useReducer(
    updateProfileReducer,
    {},
  )

  console.log(data, loading, error)
  const onSubmitHandler = e => {
    e.preventDefault()
    const { status, website, location, skills, githubUsername, bio, company } =
      e.target

    const update = {
      status: status.value,
      website: website.value,
      location: location.value,
      skills: skills.value.split(','),
      githubUsername: githubUsername.value,
      bio: bio.value,
      company: company.value,
    }
    updateProfile(update)(dispatch)
  }
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>Error:{error.message}</p>}
      <h1 className="large text-primary">Edit Your Profile</h1>
      <small>* = Required Field</small>
      <Form onSubmit={onSubmitHandler}>
        <input
          placeholder="Username"
          value={user.username}
          name="username"
          readOnly
        />
        <input placeholder="Current Status" name="status" />
        <input placeholder="Current Company" name="company" />
        <input placeholder="Website" name="website" />
        <input placeholder="Location" name="location" />
        <input placeholder="Skills (comma seperated) " name="skills" />
        <input placeholder="Github Username" name="githubUsername" />
        <input placeholder="Bio" name="bio" />
        <button type="submit">Update</button>
      </Form>
    </>
  )
}
