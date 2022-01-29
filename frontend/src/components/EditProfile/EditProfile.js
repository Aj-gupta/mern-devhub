import { useCallback, useContext, useEffect, useReducer, useState } from 'react'
import styled from '@emotion/styled/macro'
import { Form, SubmitMessage, FormGroup } from '../styled/Form'
import {
  deleteProfileFieldsReducer,
  updateProfileReducer,
} from '../../redux/reducers/profileReducer'
import { AuthContext } from '../../context/AuthContext'
import {
  deleteProfileFields,
  updateProfile,
} from '../../redux/actions/profileActions'
import { Skills } from '../profile/BioNSkills'
import { ValidateProfile, ProfileErrors } from '../../utils/validation'

const Skill = styled.div`
  position: relative;
  margin-left: 1em;
  p {
    margin: 0;
    padding: 0;
  }
  span {
    display: inline-block;
    position: absolute;
    top: -0.8em;
    right: -0.8em;
    cursor: pointer;
  }
`

const SkillCard = ({ skills }) => {
  const [skillState, setSkills] = useState(skills)
  const [{ loading, error }, dispatch] = useReducer(
    deleteProfileFieldsReducer,
    {},
  )

  const deleteSkill = useCallback(
    skill => {
      const update = {
        skill,
      }
      deleteProfileFields(update)(dispatch)
      setSkills(skillState.filter(skl => skl !== skill))
    },
    [dispatch, skillState],
  )
  console.log(skills)

  return (
    <Skills>
      <ul>
        {loading && <p>loading...</p>}

        {skillState.map(skill => (
          <li key={skill}>
            <Skill>
              <p>{skill}</p>
              <span
                role="button"
                className="material-icons"
                onClick={() => deleteSkill(skill)}
                onKeyPress={e =>
                  e.key === 'Enter' ? () => deleteSkill(skill) : () => {}
                }
                tabIndex={-1}
              >
                clear
              </span>
              {error && <p>error</p>}
            </Skill>
          </li>
        ))}
      </ul>
    </Skills>
  )
}

export default function EditProfile({ profile }) {
  console.log(profile)
  const { user } = useContext(AuthContext)
  const [{ data, loading, error }, dispatch] = useReducer(
    updateProfileReducer,
    {},
  )

  useEffect(() => {}, [profile])
  const [validationError, setValidationError] = useState({})

  console.log(data, loading, error)
  const onSubmitHandler = e => {
    e.preventDefault()
    const { status, website, location, skills, githubUsername, bio, company } =
      e.target
    const submitError = {}
    if ((!profile?.skills || profile.skills.length === 0) && !skills.value) {
      // setValidationError({ ...validationError, skills: 'skills required' })
      submitError[skills.name] = 'skills required'
    }

    if (!profile?.status && !status.value) {
      submitError[status.name] = 'status required'
    }
    if (
      Object.keys(submitError).length !== 0 &&
      Object.getPrototypeOf(submitError) === Object.prototype
    ) {
      setValidationError({
        ...validationError,
        ...submitError,
        global: 'remove errors and then submit',
      })

      return
    }

    const update = {
      status: status.value ? status.value : undefined,
      website: website.value ? website.value : undefined,
      location: location.value ? location.value : undefined,
      skills: skills.value ? skills.value.split(',') : undefined,
      githubUsername: githubUsername.value ? githubUsername.value : undefined,
      bio: bio.value ? bio.value : undefined,
      company: company.value ? company.value : undefined,
    }
    if (
      validationError && // 👈 null and undefined check
      Object.keys(validationError).length === 0 &&
      Object.getPrototypeOf(validationError) === Object.prototype
    ) {
      updateProfile(update)(dispatch)
      setValidationError({})
    } else {
      const global = 'Remove errors and then submit form'
      setValidationError({ ...validationError, global })
    }
    setValidationError({})
  }

  function handleInput(e) {
    const { name } = e.target
    const { value } = e.target

    if (!value) {
      if (name === 'skills' || name === 'status') {
        const errorMessage = `${name} is required`
        setValidationError({ ...validationError, [name]: errorMessage })
      }
    } else if (value) {
      if (ValidateProfile[name](value)) {
        const { [name]: elementName, ...rest } = validationError
        // console.log(rest)
        setValidationError(rest)
      } else {
        // console.log(name, value)

        setValidationError({ ...validationError, [name]: ProfileErrors[name] })
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

  return (
    <>
      {loading && <p>loading...</p>}
      {console.log(validationError)}
      {/* {error && <p>Error:{error.message}</p>} */}
      <h1 className="large text-primary">Edit Your Profile</h1>
      <small>* = Required Field</small>
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
          <label htmlFor="username">Username *</label>
          <input
            placeholder="Username"
            value={user.username}
            name="username"
            readOnly
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.username}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="status">Status *</label>
          <input
            placeholder="Current Status *"
            name="status"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
            defaultValue={profile?.status}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.status}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="company">Company</label>
          <input
            placeholder="Current Company"
            name="company"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
            defaultValue={profile?.company}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.company}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="website">Website</label>
          <input
            placeholder="Website"
            name="website"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
            defaultValue={profile?.website}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.website}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="location">Location</label>
          <input
            placeholder="Location"
            name="location"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
            defaultValue={profile?.location}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.location}</small>
        </FormGroup>
        <FormGroup>
          {profile && profile.skills?.length !== 0 && (
            <SkillCard skills={profile.skills} />
          )}
          <label htmlFor="skills">Skills *</label>
          <input
            placeholder="Skills (comma seperated)"
            name="skills"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.skills}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="githubUsername">Github</label>
          <input
            placeholder="Github Username"
            name="githubUsername"
            onBlur={handleInput}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
            defaultValue={profile?.githubUsername}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.githubUsername}</small>
        </FormGroup>
        <FormGroup>
          <label htmlFor="githubUsername">Bio</label>
          <input
            placeholder="Bio"
            name="bio"
            onBlur={handleInput}
            defaultValue={profile?.bio}
            onKeyUp={keyUpEventHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons error-icon">error</span>
          <small className="error">{validationError.bio}</small>
        </FormGroup>
        <button type="submit">Update</button>
      </Form>
    </>
  )
}
