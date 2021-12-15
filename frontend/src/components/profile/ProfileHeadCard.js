import styled from '@emotion/styled/macro'

const TopCard = styled.div`
  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
  background: #fff;
  border-radius: 12px;
  width: 100%;

  .details {
    margin-top: 20px;
    text-align: center;
    padding: 0 20px;
    padding-bottom: 40px;
    transition: all 0.3s;
  }
  .profile-image {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0px 5px 50px 0px #6c44fc,
      0px 0px 0px 7px rgba(107, 74, 255, 0.5);
    pa;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .current-status {
    font-size: 18px;
    font-weight: 500;
    color: #324e63;
    margin-bottom: 15px;
  }

  .name {
    font-weight: 700;
    font-size: 24px;
    color: #6944ff;
    margin-bottom: 15px;
  }

  .location {
    font-weight: 700;
  }

  .social-links {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  a {
    display: inline-flex;
    width: 55px;
    height: 55px;
    margin: 15px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #405de6;
    box-shadow: 0px 7px 30px rgba(43, 98, 169, 0.5);
    font-size: 21px;
    flex-shrink: 0;
    transition: all 0.3s;
  }
`

export default function ProfileHeadCard() {
  return (
    <TopCard>
      <div className="profile-image">
        <img
          src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg"
          alt="profile card"
        />
      </div>
      <div className="details">
        <p className="name">Ajay Kumar Gupta</p>
        <p className="current-status">Web develper</p>
        <span className="location">Jaipur</span>
        <div className="social-links">
          <a href="/">
            <span />
          </a>
          <a href="/">
            <span />
          </a>
          <a href="/">
            <span />
          </a>
          <a href="/">
            <span />
          </a>
        </div>
      </div>
    </TopCard>
  )
}
