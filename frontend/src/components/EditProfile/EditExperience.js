/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react'
import React, { useEffect, useReducer } from 'react'
import { getProfile, updateProfile } from '../../redux/actions/profileActions'
import {
  getProfileReducer,
  updateProfileReducer,
} from '../../redux/reducers/profileReducer'
import { Form } from '../styled/Form'
import Table from '../styled/Table'

function ExperienceTable() {
  const [{ loading, profile, error }, dispatch] = useReducer(
    getProfileReducer,
    { loading: true },
  )
  console.log({ loading, profile, error })
  useEffect(() => {
    getProfile(dispatch)
  }, [])

  if (loading) {
    return <p>loading...</p>
  }
  if (error) {
    return <p>Error:{error.message}</p>
  }

  if (!profile?.experience || profile.experience.length === 0) {
    return null
  }
  return (
    <Table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Title</th>
          <th>Years</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>company</td>
          <td className="hide-sm">title</td>
          <td>from -to</td>
          <td>
            <button
              type="button"
              css={css`
                background: red;
              `}
            >
              Delete
            </button>
            <button
              type="button"
              css={css`
                background: #0971f1;
              `}
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

function EditExperienceForm() {
  const [{ data, loading, error }, dispatch] = useReducer(
    updateProfileReducer,
    {},
  )
  console.log('Form', { data, loading, error })
  const onSubmitHandler = async e => {
    e.preventDefault()
    const { company, title, location, from, to, description } =
      e.target.elements
    const update = {
      company: company.value,
      title: title.value,
      location: location.value,
      from: from.value,
      to: to.value,
      description: description.value,
    }

    updateProfile({ experience: update })(dispatch)
  }

  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>Error:{error.message}</p>}
      <Form onSubmit={onSubmitHandler}>
        <input placeholder="Company" name="company" />
        <input placeholder="Job Title" name="title" />
        <input placeholder="Location" name="location" />
        <input placeholder="" type="date" name="from" />
        <input placeholder="" type="date" name="to" />
        <textarea
          name="description"
          cols="30"
          rows="5"
          placeholder="Job Description"
        />
        <button type="submit">Update</button>
      </Form>
    </>
  )
}

export default function EditExperience() {
  return (
    <>
      <h1>Edit Your Experience</h1>
      <ExperienceTable />
      <h2>Add Experience </h2>
      <small>* = Required Field</small>
      <EditExperienceForm />
    </>
  )
}
