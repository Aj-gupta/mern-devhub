/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react'
import React, { useReducer, useEffect, useState, useCallback } from 'react'
import {
  deleteProfileFields,
  updateProfile,
} from '../../redux/actions/profileActions'
import {
  deleteProfileFieldsReducer,
  updateProfileReducer,
} from '../../redux/reducers/profileReducer'
import { Form, FormGroup, SubmitMessage } from '../styled/Form'
import Table from '../styled/Table'
import { ValidateProfile, ProfileErrors } from '../../utils/validation'
import format from '../../utils/formatDate'

function EducationTable({ education, setEducation }) {
  const [{ data, loading, error }, dispatch] = useReducer(
    deleteProfileFieldsReducer,
    {},
  )
  console.log(education)
  console.log({ data, loading, error })
  const deleteEducation = useCallback(
    edu => {
      // console.log('delete', edu)
      deleteProfileFields({ education: edu })(dispatch)

      setEducation([...education.filter(e => e._id !== edu._id)])
    },
    [education],
  )
  useEffect(() => {}, [education, setEducation])
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>error</p>}
      {education && education.length !== 0 && (
        <Table>
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
            </tr>
          </thead>
          <tbody>
            {education.map(edu => (
              <tr key={edu._id}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td>
                  {`${format(edu.from)}-` +
                    `${edu.current ? 'Now' : format(edu.to)}`}
                </td>
                <td>
                  <button
                    type="button"
                    css={css`
                      background: red;
                    `}
                    onClick={() => deleteEducation(edu)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

function EditEducationForm({ setEducation }) {
  const [{ data, loading, error }, dispatch] = useReducer(
    updateProfileReducer,
    {},
  )
  console.log('Form', { data, loading, error })

  const [validationError, setValidationError] = useState({})

  const onSubmitHandler = async e => {
    e.preventDefault()
    const { school, degree, fieldOfStudy, from, to, description } =
      e.target.elements
    if (!school.value || !degree.value || !fieldOfStudy.value || !from.value) {
      setValidationError({
        ...validationError,
        global: 'Please input all required fields.',
      })
      return
    }
    const update = {
      school: school.value ? school.value : undefined,
      degree: degree.value ? degree.value : undefined,
      fieldOfStudy: fieldOfStudy.value ? fieldOfStudy.value : undefined,
      from: from.value ? from.value : undefined,
      to: to.value ? to.value : undefined,
      description: description.value ? description.value : undefined,
    }

    updateProfile({ education: update })(dispatch)
  }

  function handleInput(e) {
    const { name } = e.target
    const { value } = e.target

    if (!value) {
      if (name === 'school' || name === 'degree' || name === 'fieldOfStudy') {
        const errorMessage = `${name} is required`
        setValidationError({ ...validationError, [name]: errorMessage })
      }
    } else if (value) {
      if (ValidateProfile.education[name](value)) {
        const { [name]: elementName, ...rest } = validationError

        setValidationError(rest)
      } else {
        setValidationError({
          ...validationError,
          [name]: ProfileErrors.education[name],
        })
      }
    }
  }

  let timer
  function keyUpEventHandler(e) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      handleInput(e)
    }, 600)
  }

  const onKeyDownHandler = () => {
    clearTimeout(timer)
  }

  useEffect(() => {
    if (data) {
      // console.log(data.)
      setEducation(data.profile.education)
    }
  }, [loading])
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>Error:{error.message}</p>}
      <Form onSubmit={onSubmitHandler}>
        <SubmitMessage visible={error || validationError.global || !!data}>
          <div
            className="error"
            visible={validationError.global || error ? 'true' : 'false'}
          >
            <span className="material-icons">cancel</span>
            <p>
              {validationError.global
                ? validationError.global
                : `${error?.status ? error.status : ''}${
                    error && ` ${error.message}`
                  }`}
            </p>
          </div>
          <div className="success" visible={data ? 'true' : 'false'}>
            <span className="material-icons">check</span>
            <p>Profile Successfully updated</p>
          </div>
        </SubmitMessage>
        <FormGroup>
          <label htmlFor="school">School or University *</label>
          <input
            placeholder="School or University"
            name="school"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.school}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="degree">Degree *</label>
          <input
            placeholder="Degree"
            name="degree"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.degree}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="fieldOfStudy">Field or Major *</label>
          <input
            placeholder="Field or Major"
            name="fieldOfStudy"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.fieldOfStudy}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="degree">From *</label>
          <input
            type="date"
            name="from"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.from}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="degree">To</label>
          <input type="date" name="to" />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.to}</small>
        </FormGroup>
        <FormGroup>
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.description}</small>
        </FormGroup>
        <button type="submit">Update</button>
      </Form>
    </>
  )
}
export default function EditEducation({ education }) {
  const [educationState, setEducationState] = useState(education)
  console.log(education)

  const setEducation = useCallback(edu => {
    setEducationState(edu)
  }, [])
  return (
    <>
      <h1 className="large text-primary">Edit Your Education</h1>
      <EducationTable education={educationState} setEducation={setEducation} />
      <h2>Add Education </h2>
      <small>* = Required Field</small>
      <EditEducationForm setEducation={setEducation} />
    </>
  )
}
