import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

const TeamDetailBottom = ({ team }) => {
  const {
    strDescriptionEN,
    strStadiumDescription,
    strTwitter,
    strFacebook,
    strYoutube,
  } = team;
  return (
    <Container>
      <div className="team-d-texts">
        <p>{strDescriptionEN}</p>
        <p>{strStadiumDescription}</p>
      </div>
      <div className="d-flex align-items-center justify-content-center icon-box">
        <a href={`https://${strTwitter}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={`https://${strFacebook}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href={`https://${strYoutube}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </Container>
  );
};

export default TeamDetailBottom;
