import styled from '@emotion/styled/macro'

const TopCard = styled.div`
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  background: #efefef;
  border-radius: 12px;
  width: 100%;
  margin-top:1em;
  .profile {
    display: block;
    margin-top: 2.2em;
    position: relative;
  }
  .details {
    margin-top: 20px;
    text-align: center;
    padding: 0 20px;
    padding-bottom: 40px;
    transition: all 0.3s;
  }
  .profile img {
    display: block;
    margin:0 auto;
    width: 124px;
    height: 124px;
    border-radius: 50%;
    box-shadow: 0px 5px 50px 0px rgba(33, 131, 222, 1),
      0px 0px 0px 7px rgba(33, 131, 222, 1);
    pa;
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
export default function ProfileTop({
  profile: { profileUrl, name, status, company, location, website, social },
}) {
  return (
    <TopCard>
      <div className="profile">
        <img
          src={
            profileUrl ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMzpx87sl7FshhB2Z_xgx6jT4u2oKTF5vww&usqp=CAU'
          }
          alt="profile card"
        />

        <div className="details">
          <p className="name">{name}</p>
          <p className="current-status">
            {status
              .split(' ')
              .map(str => str.charAt(0).toUpperCase() + str.substring(1))
              .join(' ')}{' '}
            {company ? (
              <span>
                {' '}
                at{' '}
                {company
                  .split(' ')
                  .map(str => str.charAt(0).toUpperCase() + str.substring(1))
                  .join(' ')}
              </span>
            ) : null}
          </p>
          <span className="location">{location || null}</span>
          {(social || website) && (
            <div className="social-links">
              {website && (
                <a href={website}>
                  <span />
                </a>
              )}
              {social &&
                social.map(value => (
                  <a href={value}>
                    <span />
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>
    </TopCard>
  )
}
