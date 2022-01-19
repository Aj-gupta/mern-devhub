/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react'
import React from 'react'
import { Form } from '../styled/Form'
import Table from '../styled/Table'

function EducationTable() {
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

export default function EditEducation() {
  return (
    <>
      <h1 className="large text-primary">Edit Your Education</h1>
      <EducationTable />
      <h2>Add Education </h2>
      <small>* = Required Field</small>
      <Form>
        <input placeholder="School or University" />
        <input placeholder="Degree" />
        <input placeholder="Field or Major" />
        <input type="date" />
        <input type="date" />
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
