/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import {
  deleteProfileFields,
  updateProfile,
} from '../../redux/actions/profileActions'
import {
  updateProfileReducer,
  deleteProfileFieldsReducer,
} from '../../redux/reducers/profileReducer'
import { Form, FormGroup, SubmitMessage } from '../styled/Form'
import Table from '../styled/Table'
import { ValidateProfile, ProfileErrors } from '../../utils/validation'
import format from '../../utils/formatDate'

function ExperienceTable({ experience, setExperience }) {
  console.log(experience)
  const [{ loading, error }, dispatch] = useReducer(
    deleteProfileFieldsReducer,
    {},
  )

  const deleteExperience = useCallback(
    exp => {
      console.log('delete', exp)
      deleteProfileFields({ experience: exp })(dispatch)
      console.log(experience.filter(e => e._id !== exp._id))
      setExperience([...experience.filter(e => e._id !== exp._id)])
    },
    [experience],
  )

  useEffect(() => {}, [experience, setExperience])
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
      {experience && experience?.length !== 0 && (
        <Table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
            </tr>
          </thead>
          <tbody>
            {experience &&
              experience.map(exp => (
                <tr key={exp._id}>
                  <td>{exp.company}</td>
                  <td className="hide-sm">{exp.title}</td>
                  <td>
                    {`${format(exp.from)}-` +
                      `${exp.current ? 'Now' : format(exp.to)}`}
                  </td>
                  <td>
                    <button
                      type="button"
                      css={css`
                        background: red;
                      `}
                      onClick={() => deleteExperience(exp)}
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

function EditExperienceForm({ setExperience }) {
  const [{ data, loading, error }, dispatch] = useReducer(
    updateProfileReducer,
    {},
  )

  const [validationError, setValidationError] = useState({})
  console.log('Form', { data, loading, error })

  const onSubmitHandler = async e => {
    e.preventDefault()
    const { company, title, location, from, to, description } =
      e.target.elements

    if (!company.value || !title.value || !from.value) {
      setValidationError({
        ...validationError,
        global: 'Please input all required fields.',
      })
      return
    }
    const update = {
      company: company.value,
      title: title.value,
      location: location.value ? location.value : undefined,
      from: from.value,
      to: to.value ? to.value : undefined,
      description: description.value ? description.value : undefined,
    }

    updateProfile({ experience: update })(dispatch)
  }

  function handleInput(e) {
    const { name } = e.target
    const { value } = e.target

    if (!value) {
      if (name === 'company' || name === 'title' || name === 'from') {
        const errorMessage = `${name} is required`
        setValidationError({ ...validationError, [name]: errorMessage })
      }
    } else if (value) {
      if (ValidateProfile.experience[name](value)) {
        const { [name]: elementName, ...rest } = validationError

        setValidationError(rest)
      } else {
        const errorMessage = ProfileErrors.experience[name]

        setValidationError({ ...validationError, [name]: errorMessage })
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
      setExperience(data.profile.experience)
    }
  }, [loading])
  return (
    <>
      {loading && <p>loading...</p>}
      <Form onSubmit={onSubmitHandler} noValidate>
        <SubmitMessage visible={error || !!data}>
          <div className="error" visible={error ? 'true' : 'false'}>
            <span className="material-icons">cancel</span>
            <p>
              {`${error?.status ? error.status : ''}${
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
          <label htmlFor="company">Company *</label>
          <input
            placeholder="Company"
            name="company"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.company}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Job Title *</label>
          <input
            placeholder="Job Title"
            name="title"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.title}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="location">Location</label>
          <input
            placeholder="Location"
            name="location"
            onKeyUp={keyUpEventHandler}
            onBlur={handleInput}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.location}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="from">From *</label>
          <input placeholder="" type="date" name="from" />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.location}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="to">To</label>
          <input placeholder="" type="date" name="to" />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.location}</small>
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

export default function EditExperience({ experience }) {
  const [experienceState, setExperience] = useState(experience)

  const setExperienceState = useCallback(exp => {
    setExperience(exp)
  }, [])

  return (
    <>
      <h1>Edit Your Experience</h1>
      <ExperienceTable
        experience={experienceState}
        setExperience={setExperienceState}
      />
      <h2>Add Experience </h2>
      <small>* = Required Field</small>
      <EditExperienceForm setExperience={setExperienceState} />
    </>
  )
}
