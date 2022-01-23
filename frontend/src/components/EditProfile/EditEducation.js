/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react'
import React, { useReducer, useEffect } from 'react'
import { getProfile, updateProfile } from '../../redux/actions/profileActions'
import {
  getProfileReducer,
  updateProfileReducer,
} from '../../redux/reducers/profileReducer'
import { Form } from '../styled/Form'
import Table from '../styled/Table'

function EducationTable() {
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

  if (!profile?.education || profile.education.length === 0) {
    return null
  }
  return (
    <Table>
      <thead>
        <tr>
          <th>School</th>
          <th>Degree</th>
          <th>Years</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>School</td>
          <td>Degree</td>
          <td>Years</td>
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

function EditEducationForm() {
  const [{ data, loading, error }, dispatch] = useReducer(
    updateProfileReducer,
    {},
  )
  console.log('Form', { data, loading, error })
  const onSubmitHandler = async e => {
    e.preventDefault()
    const { school, degree, fieldOfStudy, from, to, description } =
      e.target.elements
    const update = {
      school: school.value,
      degree: degree.value,
      fieldOfStudy: fieldOfStudy.value,
      from: from.value,
      to: to.value,
      description: description.value,
    }

    updateProfile({ education: update })(dispatch)
  }
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>Error:{error.message}</p>}
      <Form onSubmit={onSubmitHandler}>
        <input placeholder="School or University" name="school" />
        <input placeholder="Degree" name="degree" />
        <input placeholder="Field or Major" name="fieldOfStudy" />
        <input type="date" name="from" />
        <input type="date" name="to" />
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
export default function EditEducation() {
  return (
    <>
      <h1 className="large text-primary">Edit Your Education</h1>
      <EducationTable />
      <h2>Add Education </h2>
      <small>* = Required Field</small>
      <EditEducationForm />
    </>
  )
}
