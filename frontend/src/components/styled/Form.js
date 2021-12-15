import styled from '@emotion/styled/macro'
// import * as colors from '../../styles/colors'
// import * as mq from '../../styles/media-queries'

const FormGroup = styled.div({})

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

const Form = styled.form`
  input {
    color: #fff;
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: 200;
    margin-bottom: 45px;
    padding: 10px 10px 10px 10px;
    background: transparent;
    border-bottom: 1px solid #4c5c72;
    cursor: text;
    text-align: start;
    display: block;
  }
  label {
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    margin: 6px 0;
  }
  button {
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    padding: 12px 55px;
    margin-right: 20px;
    border: none;
    cursor: pointer;
    border-radius: 35px;
    transition: all 0.3s linear;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.55);
    background: linear-gradient(to right, #5bcdbe, #41ab9e);
    '&:hover': {
      boxshadow: 'none';
    }
  }
`
export { FormGroup, Input, Button, Label, Form }
