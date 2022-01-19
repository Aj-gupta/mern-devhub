import styled from '@emotion/styled'

const ModalContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  margin: 0;
  padding: 0;
  background: rgba(77, 77, 77, 0.7);
  transition: 0.5s;
  ${({ isOpen = false }) => isOpen && `visibility:visible; opacity:1;`}
`

const Content = styled.div`
  position: fixed;
  min-width: 500px;
  /* border: 1px solid black; */
  background: #fafafa;

  /* vertical-align: middle; */
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
  transition: all 0.4s;
  border-radius: 10px;
  header > h2 {
    display: inline-block;
    margin-left: 1em;
  }
  header > button {
    /* display: inline; */
    background: rgb(122, 179, 234);
    border-radius: 50%;
    outline: none;
    border: 1px solid darkgrey;
    float: right;
    margin-top: 1.5em;
    margin-right: 1.5em;
    cursor: pointer;
  }
  header > button:hover {
    background: rgb(2, 70, 142);
    span {
      color: white;
    }
  }
  header > button > span {
    align-self: center;
    color: black;
  }

  form {
    margin-left: 1em;
    margin-right: 1em;
  }
`

export { ModalContainer, Content }
