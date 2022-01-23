import styled from '@emotion/styled/macro'

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
  }
  .github-card__meta > i {
    font-size: 16px;
  }
`

export default function GitCard() {
  return (
    <GitCardContainer>
      <h2>Github Repos</h2>
      <ul>
        <li>
          <a
            href="https://github.com/Nexmo/nexmo-ruby"
            className="github-card"
            data-github="Nexmo/nexmo-ruby"
          >
            <h3>nexmo-ruby</h3>
            <p>Nexmo REST API client for Ruby</p>
            <span className="github-card__meta">
              <span className="github-card__language-icon">●</span> Ruby
            </span>
            <span className="github-card__meta">
              <i className="fa fa-star" aria-hidden="true" />
              <span data-stars>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
            <span className="github-card__meta">
              <i className="fa fa-code-fork" aria-hidden="true" />
              <span data-forks>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nexmo/nexmo-ruby"
            className="github-card"
            data-github="Nexmo/nexmo-ruby"
          >
            <h3>nexmo-ruby</h3>
            <p>Nexmo REST API client for Ruby</p>
            <span className="github-card__meta">
              <span className="github-card__language-icon">●</span> Ruby
            </span>
            <span className="github-card__meta">
              <i className="fa fa-star" aria-hidden="true" />
              <span data-stars>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
            <span className="github-card__meta">
              <i className="fa fa-code-fork" aria-hidden="true" />
              <span data-forks>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nexmo/nexmo-ruby"
            className="github-card"
            data-github="Nexmo/nexmo-ruby"
          >
            <h3>nexmo-ruby</h3>
            <p>Nexmo REST API client for Ruby</p>
            <span className="github-card__meta">
              <span className="github-card__language-icon">●</span> Ruby
            </span>
            <span className="github-card__meta">
              <i className="fa fa-star" aria-hidden="true" />
              <span data-stars>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
            <span className="github-card__meta">
              <i className="fa fa-code-fork" aria-hidden="true" />
              <span data-forks>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nexmo/nexmo-ruby"
            className="github-card"
            data-github="Nexmo/nexmo-ruby"
          >
            <h3>nexmo-ruby</h3>
            <p>Nexmo REST API client for Ruby</p>
            <span className="github-card__meta">
              <span className="github-card__language-icon">●</span> Ruby
            </span>
            <span className="github-card__meta">
              <i className="fa fa-star" aria-hidden="true" />
              <span data-stars>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
            <span className="github-card__meta">
              <i className="fa fa-code-fork" aria-hidden="true" />
              <span data-forks>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nexmo/nexmo-ruby"
            className="github-card"
            data-github="Nexmo/nexmo-ruby"
          >
            <h3>nexmo-ruby</h3>
            <p>Nexmo REST API client for Ruby</p>
            <span className="github-card__meta">
              <span className="github-card__language-icon">●</span> Ruby
            </span>
            <span className="github-card__meta">
              <i className="fa fa-star" aria-hidden="true" />
              <span data-stars>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
            <span className="github-card__meta">
              <i className="fa fa-code-fork" aria-hidden="true" />
              <span data-forks>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nexmo/nexmo-ruby"
            className="github-card"
            data-github="Nexmo/nexmo-ruby"
          >
            <h3>nexmo-ruby</h3>
            <p>Nexmo REST API client for Ruby</p>
            <span className="github-card__meta">
              <span className="github-card__language-icon">●</span> Ruby
            </span>
            <span className="github-card__meta">
              <i className="fa fa-star" aria-hidden="true" />
              <span data-stars>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
            <span className="github-card__meta">
              <i className="fa fa-code-fork" aria-hidden="true" />
              <span data-forks>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nexmo/nexmo-ruby"
            className="github-card"
            data-github="Nexmo/nexmo-ruby"
          >
            <h3>nexmo-ruby</h3>
            <p>Nexmo REST API client for Ruby</p>
            <span className="github-card__meta">
              <span className="github-card__language-icon">●</span> Ruby
            </span>
            <span className="github-card__meta">
              <i className="fa fa-star" aria-hidden="true" />
              <span data-stars>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
            <span className="github-card__meta">
              <i className="fa fa-code-fork" aria-hidden="true" />
              <span data-forks>
                <i className="fa fa-spinner" aria-hidden="true" />
              </span>
            </span>
          </a>
        </li>
      </ul>
    </GitCardContainer>
  )
}
