/* eslint-disable camelcase */
import styled from '@emotion/styled/macro'
import { useEffect, useReducer } from 'react'
import { getGitRepos } from '../../redux/actions/profileActions'
import { getGitReposReducer } from '../../redux/reducers/profileReducer'

const GitCardContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;
  background: #efefef;
  margin-top: 1em;
  ul {
    list-style: none;
  }
  ul > li {
    display: inline;
    float: left;
  }
  h2 {
    text-transform: uppercase;
    padding: 0 7px;
    margin-left: 18px;
  }
  .github-card {
    display: block;
    box-sizing: border-box;
    border: 1px solid #ccc;
    margin: 10px;
    padding: 20px;
    color: #555;
    text-decoration: none;
    font-size: 13px;
    flex: 1;
    min-width: 250px;
  }
  .github-card > h3 {
    margin-top: 0;
    color: #4078c0;
    font-size: 15px;
  }

  .github-card__meta {
    margin-right: 20px;
    /* display: flex; */
    tex-align: center;
    /* align-items: center; */
  }
  .github-card__meta > span {
    font-size: 16px;
    margin-right: 2px;
  }
`

const Repo = ({
  repo: {
    html_url,
    stargazers_count,
    name,
    description,
    language,
    forks_count,
  },
}) => (
  <li>
    <a href={html_url} className="github-card" target="_blank" rel="noreferrer">
      <h3>{name}</h3>
      <p>{description}</p>
      {language && (
        <span className="github-card__meta">
          <span className="github-card__language-icon">●</span>
          {language}
        </span>
      )}

      <span className="github-card__meta">
        {stargazers_count}
        <span className="material-icons"> star</span>
      </span>
      <span className="github-card__meta">
        {forks_count}
        <span className="material-icons">fork_right</span>
      </span>
    </a>
  </li>
)
export default function GitCard({ githubUsername }) {
  // console.log(githubUsername)
  const [{ loading, data, error }, dispatch] = useReducer(
    getGitReposReducer,
    {},
  )
  console.log({ loading, data, error })
  useEffect(() => {
    getGitRepos(githubUsername)(dispatch)
  }, [githubUsername])
  if (githubUsername) {
    return (
      <GitCardContainer>
        {error && <p>error:{error.message}</p>}
        {loading && <p>loading...</p>}
        {data && (
          <>
            <h2>Latest 5 Github Repos</h2>
            <ul>
              {data.map(repo => (
                <Repo key={repo.id} repo={repo} />
              ))}
            </ul>
          </>
        )}
      </GitCardContainer>
    )
  }
  return null
}
