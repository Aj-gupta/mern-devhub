/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react'
import React from 'react'
import { Form } from '../styled/Form'
import Table from '../styled/Table'

function ExperienceTable() {
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

export default function EditExperience() {
  return (
    <>
      <h1>Edit Your Experience</h1>
      <ExperienceTable />
      <h2>Add Experience </h2>
      <small>* = Required Field</small>
      <Form>
        <input placeholder="Company" />
        <input placeholder="Job Title" />
        <input placeholder="Location" />
        <input placeholder="" type="date" />
        <input placeholder="" type="date" />
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
