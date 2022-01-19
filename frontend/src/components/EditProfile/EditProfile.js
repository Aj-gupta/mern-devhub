import { Form } from '../styled/Form'

export default function EditProfile() {
  return (
    <>
      <h1 className="large text-primary">Edit Your Profile</h1>
      <small>* = Required Field</small>
      <Form>
        <input placeholder="Username" />
        <input placeholder="Current Status" />
        <input placeholder="Website" />
        <input placeholder="Location" />
        <input placeholder="Skills (comma seperated) " />
        <input placeholder="Github Username" />
        <input placeholder="Bio" />
        <button type="submit">Update</button>
      </Form>
    </>
  )
}
