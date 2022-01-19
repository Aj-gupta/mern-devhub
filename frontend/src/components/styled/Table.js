import styled from '@emotion/styled/macro'

const Table = styled.table`
  border-collapse: collapse;
  box-shadow: 0 5px 10px grey;
  text-align: left;
  thead {
    box-shadow: 0 5px 10px grey;
    text-transform: uppercase;
  }

  th {
    padding: 1rem 1.5rem;
    font-weight: 600;
  }
  td {
    padding: 1rem 1.5rem;
  }
  button {
    padding: 0.5rem 0.8rem;
    margin-left: 0.5em;
    margin-top: 2px;
    width: 4rem;
    border-radius: 7px;
    color: white;
    border: none;
    cursor: pointer;
  }
`
export default Table
