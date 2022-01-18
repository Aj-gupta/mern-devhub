import styled from '@emotion/styled/macro'

const EduNWork = styled.div`
  float: left;
  margin-top: 1em;
  box-sizing: border-box;
  background: #efefef;
  width: 100%;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  h2 {
    text-transform: uppercase;
    padding: 0 7px;
    margin: 18px 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .work,
  .edu {
    float: left;
  }

  .work small,
  .edu small {
    display: block;
    opacity: 0.7;
  }

  .work ul li,
  .edu ul li {
    position: relative;
    margin-left: 15px;
    padding-left: 25px;
    padding-bottom: 15px;
  }

  .work ul li:hover::before,
  .edu ul li:hover::before {
    -webkit-animation: circle 1.2s infinite;
    animation: circle 1.2s infinite;
  }

  .work ul li:hover span,
  .edu ul li:hover span {
    color: #405de6;
  }

  @-webkit-keyframes circle {
    from {
      box-shadow: 0 0 0 0px #405de6;
    }
    to {
      box-shadow: 0 0 0 6px rgb(64, 93, 230);
    }
  }

  @keyframes circle {
    from {
      box-shadow: 0 0 0 0px #405de6;
    }
    to {
      box-shadow: 0 0 0 6px rgb(64, 93, 230);
    }
  }
  .work ul li:first-of-type::before,
  .edu ul li:first-of-type::before {
    width: 10px;
    height: 10px;
    left: 1px;
  }

  .work ul li:last-of-type,
  .edu ul li:last-of-type {
    padding-bottom: 3px;
  }

  .work ul li:last-of-type::after,
  .edu ul li:last-of-type::after {
    border-radius: 1.5px;
  }

  .work ul li::before,
  .work ul li::after,
  .edu ul li::before,
  .edu ul li::after {
    content: '';
    display: block;
    position: absolute;
  }

  .work ul li::before,
  .edu ul li::before {
    width: 7px;
    height: 7px;
    border: 3px solid #ffffff;
    background: #405de6;
    border-radius: 50%;
    left: 3px;
    z-index: 1;
  }

  .work ul li::after,
  .edu ul li::after {
    width: 3px;
    height: 100%;
    background: #ffffff;
    left: 5px;
    top: 0;
  }

  .work ul li span,
  .edu ul li span {
    transition-duration: 0.3s;
  }

  .work {
    width: 48%;
    padding: 15px;
    margin: 0 4% 15px 0;
  }

  .edu {
    width: 48%;
    padding: 15px;
  }
`
export default function EducationNWork() {
  return (
    <EduNWork>
      <div className="work">
        <h2>Experience</h2>
        <ul>
          <li>
            <span>Technical Consultant - Web Design</span>
            <small>Fiserv</small> {/* Company */}
            <small>Apr 2018 - Now</small>
          </li>
          <li>
            <span>Web Designer</span>
            <small>Lynden</small>
            <small>Jan 2018 - Apr 2018</small>
          </li>
          <li>
            <span>Intern - Web Design</span>
            <small>Lynden</small>
            <small>Aug 2017 - Dec 2017</small>
          </li>
        </ul>
      </div>
      <div className="edu">
        <h2>Education</h2>
        <ul>
          <li>
            <span>
              Bachelor of Science
              <br />
              Web Design and Development
            </span>
            <small>BYU-Idaho</small>
            <small>Jan. 2016 - Apr. 2018</small>
          </li>
          <li>
            <span>Computer Science</span>
            <small>Edmonds Community College</small>
            <small>Sept. 2014 - Dec. 2015</small>
          </li>
          <li>
            <span>High School</span>
            <small>Henry M. Jackson High School</small>
            <small>Jan. 2013 - Jun. 2015</small>
          </li>
        </ul>
      </div>
    </EduNWork>
  )
}
