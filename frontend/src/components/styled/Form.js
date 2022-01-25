import styled from '@emotion/styled/macro'
// import * as colors from '../../styles/colors'
// import * as mq from '../../styles/media-queries'

const FormGroup = styled.div`
  position: relative;
  label {
    fontsize: 16px;
    fontweight: 300;
    margin: 6px 0;
  }
  input {
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: 200;

    padding: 10px 10px 10px 10px;
    background: transparent;
    border-bottom: 1px solid #4c5c72;
    cursor: text;
    text-align: start;
    display: block;
  }
  input[error='true'] {
    outline-color: red;
    border: 1px solid red;
  }
  input[error='true']:focus {
    outline-color: red;
  }
  small.error {
    display: inline-block;
    color: red;
    margin-top: 10px;
    margin-left: 5px;
    margin-bottom: 30px;
  }
  span.error-icon {
    position: absolute;
    position: absolute;
    right: 0.2em;
    top: 0.4em;
    color: #f44336;
    opacity: 0;
    visibility: non;
  }
  input[error='true'] + span.error-icon {
    opacity: 1;
    visibility: visible;
  }
`

const Label = styled.label({
  color: '#fff',
  fontSize: '16px',
  fontWeight: '300',
  margin: '6px 0',
})

const inputStyles = `
  color: #fff;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 45px;
  padding: 10px 10px 10px 10px;
  background: transparent;
  border-bottom: 1px solid #4c5c72;
  cursor:text;
  text-align:start;
  display:block;
`

const Input = styled.input(inputStyles)

const Button = styled.button({
  color: '#fff',
  fontSize: '18px',
  fontWeight: '300',
  padding: '12px 55px',
  marginRight: '20px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '35px',
  transition: 'all 0.3s linear',
  boxShadow: '0 0 40px rgba(0, 0, 0, 0.55)',
  background: 'linear-gradient(to right, #5bcdbe,#41ab9e)',
  '&:hover': {
    boxShadow: 'none',
  },
})

// const Form2 = styled.form({})

const SubmitMessage = styled.div`
  /* margin-bottom: 20px; */

  margin-bottom: 3em;
  /* padding: 10px; */
  height: 3em;
  border-radius: 3px 3px 3px 3px;
  text-align: center;
  font-size: 14px;
  transition: all 0.5s ease;
  opacity: 0;
  display: none;
  div {
    display: none;
    /* margin-left: 1em; */
    /* margin: 1em 0; */
    /* padding: 10px; */
    border-radius: 3px 3px 3px 3px;
  }
  div > span {
    margin-left: 0.5em;
  }
  div > p {
    display: inline;
    margin-left: 0.5em;
  }
  div.error > span {
    color: red;
  }

  div.success > span {
    color: green;
  }

  div[visible='true'].error {
    display: flex;
    align-items: center;
    background-color: #f0b8ba;
  }
  div[visible='true'].success {
    display: flex;
    align-items: center;
    background-color: #dff2bf;
  }

  ${({ visible = false }) => visible && `display:block; opacity:1;`}
`

const Form = styled.form`
  button {
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    margin-top: 10px;
    padding: 12px 55px;
    margin-right: 20px;
    border: none;
    cursor: pointer;
    border-radius: 35px;
    transition: all 0.3s linear;
    background: linear-gradient(to right, #01468f, #01468f);
  }

  button:hover {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.55);
  }
`
export { FormGroup, Input, Button, Label, Form, SubmitMessage }
