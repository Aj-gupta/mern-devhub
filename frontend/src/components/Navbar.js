import styled from '@emotion/styled/macro'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  /* border-bottom: 1px solid black; */
  background-image: linear-gradient(-90deg, #fff, #eee);
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  a {
    text-decoration: none;
    color: #000000bf;
    display: inline-block;
    margin: 10px;
    font-weight: 700;
    padding: 10px 10px;
    border-radius: 50px;
    -webkit-transition: all 0.8s; /* Safari prior 6.1 */
    transition: all 0.8s;
  }
  a.active,
  button.active {
    background-color: rgba(83, 173, 203, 0.3);
  }
  a:hover,
  button:hover {
    background-color: rgba(83, 173, 203, 1);
    color: #fff;
    cursor: pointer;
  }
  button {
    margin: 10px;
    padding: 10px 10px;
    color: #000000bf;
    font-weight: 700;
    border-radius: 50px;
    -webkit-transition: all 0.8s; /* Safari prior 6.1 */
    transition: all 0.8s;
    float: right;
    background: none;
    border: none;
    cursor: pointer;
    outline: inherit;
  }
`

export default function Navbar() {
  return (
    <Nav>
      <Link to="/">DevHub</Link>
      <Link to="/developers">Developers</Link>
      <button type="button" className="active">
        Register
      </button>
      <button type="button">Login</button>
    </Nav>
  )
}
