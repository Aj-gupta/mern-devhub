import styled from '@emotion/styled/macro'
import { useCallback } from 'react'
import { AuthContext } from '../context/AuthContext'

const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 60px;
  /* border-bottom: 1px solid black; */
  background-image: linear-gradient(-90deg, #c4c4c4, #c4c4c4);
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  ul {
    position: relative;
    /* display: inline; */
    width: 80%;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    list-style: none;
  }
  ul > li {
    display: inline-block;
    margin: 10px;
    padding: 10px 10px;
    border-radius: 50px;
    -webkit-transition: all 0.8s; /* Safari prior 6.1 */
    transition: all 0.8s;
  }

  ul > li > a {
    text-decoration: none;
    color: #000000;
    font-weight: 700;
  }
  li.active {
    background-color: rgba(122, 180, 235, 1);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }
  li:hover {
    background-color: rgba(33, 131, 222, 1);
    color: #fff;
    cursor: pointer;
  }
  li:hover > a {
    color: #fff;
  }
  li.right {
    float: right;
    display: flex;
    margin: 8px 20px 8px 0px;
    padding: 6px 6px;
  }
  li.right > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  li.right > a {
    margin: 8px 0px 8px 5px;
  }
  ul.dropdown {
    width: 150px;
    display: none;
    flex-direction: column;
    position: absolute;
    /* margin-right: 0.5rem; */
    margin-left: auto;
    top: 56px;
    right: 0;
    z-index: 1;
  }
  ul.dropdown > li {
    margin-top: 0;
    margin-bottom: 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
    background-color: rgba(122, 180, 235, 1);
  }
  li.right:hover > ul.dropdown {
    display: flex;
  }
  ul.dropdown > li:hover {
    background-color: rgba(33, 131, 222, 1);
  }
`
export default function Navbar() {
  const { user } = useCallback(AuthContext)

  return (
    <Nav>
      {user && (
        <ul>
          <li>
            <a href="/">DevHub</a>
          </li>
          <li>
            <a href="/developers">Developers</a>
          </li>
          <li>
            <a href="/Chats">Chats</a>
          </li>
          <li className="right">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
            <a href="/viewProfile">Account</a>
            <ul className="dropdown">
              <li>
                <a href="/editProfile">Edit Profile</a>
              </li>
              <li>
                <a href="/viewProfile">View Profile</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      )}

      {!user && (
        <ul>
          <li>
            <a href="/">DevHub</a>
          </li>
          <li>
            <a href="/developers">Developers</a>
          </li>
          <li className="right">
            <a href="/login">Login</a>
          </li>
          <li className="right">
            <a href="/register">Sign Up</a>
          </li>
        </ul>
      )}
    </Nav>
  )
}
