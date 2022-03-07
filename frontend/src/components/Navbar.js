import styled from '@emotion/styled/macro'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import * as mq from '../styles/media-queries'

const Nav = styled.nav`
  top: 0;
  position: sticky;
  width: 100%;
  height: 8vh;

  z-index: 1;
  background-color: #c4c4c4;
  /* border-bottom: 1px solid black; */
  /* background-image: linear-gradient(-90deg, #c4c4c4, #c4c4c4); */
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  ul {
    position: relative;
    /* display: inline; */
    width: 70%;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    list-style: none;
    ${mq.small} {
      width: 90%;
    }
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
    ${mq.extraSmall} {
      display: none;
    }
  }
  li.expand-menu {
    display: none;
    ${mq.extraSmall} {
      display: inline;
    }
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
  const { user } = useContext(AuthContext)

  // console.log(user)
  useEffect(() => {}, [user])
  return (
    <Nav>
      {user && (
        <ul>
          <li>
            <Link to="/">DevHub</Link>
          </li>
          <li>
            <Link to="/developers">Developers</Link>
          </li>
          <li>
            <Link to="/chat">Chats</Link>
          </li>
          <li className="right">
            <span className="material-icons">account_circle</span>
            <Link to="/dashboard">Account</Link>
            <ul className="dropdown">
              <li>
                <Link to="/editProfile">Edit Profile</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `/profile/${user.username}`,
                  }}
                >
                  View Profile
                </Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </li>
          <li className="expand-menu right">
            <span className="material-icons">menu</span>
          </li>
        </ul>
      )}

      {!user && (
        <ul>
          <li>
            <Link to="/">DevHub</Link>
          </li>
          <li className="expand-item">
            <Link to="/developers">Developers</Link>
          </li>
          <li className="right expand-icon">
            <span className="material-icons">menu</span>
          </li>
          <li className="right">
            <Link to="/login">Login</Link>
          </li>
          <li className="right">
            <Link to="/register">Sign Up</Link>
          </li>
          <li className="expand-menu right">
            <span className="material-icons">menu</span>
          </li>
        </ul>
      )}
    </Nav>
  )
}
