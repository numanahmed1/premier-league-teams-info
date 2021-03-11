import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Banner from "../Banner/Banner";

import flag from "../../images/flag.png";
import football from "../../images/football.png";
import founded from "../../images/founded.png";
import sign from "../../images/sign.png";
import male from "../../images/male.png";
import female from "../../images/female.png";
import "./TeamDetail.css";
import TeamDetailBottom from "../TeamDetailBottom/TeamDetailBottom";

const TeamDetail = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [id]);
  const {
    strTeam,
    strTeamBadge,
    intFormedYear,
    strGender,
    strCountry,
    strSport,
    strTeamBanner,
  } = team;
  return (
    <>
      <Banner bg={strTeamBanner} img={strTeamBadge} />
      <div className="team-detail">
        <Container>
          <div className="team-hr-card">
            <Row>
              <Col md={6} lg={7}>
                <h1>{strTeam}</h1>
                <div className="d-flex align-items-center mt-4">
                  <img className="hr-card-logo" src={founded} alt="" />
                  <p>Founded: {intFormedYear}</p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img className="hr-card-logo" src={flag} alt="" />
                  <p>Country: {strCountry}</p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img className="hr-card-logo" src={football} alt="" />
                  <p>Sport Type: {strSport}</p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img className="hr-card-logo" src={sign} alt="" />
                  <p>Gender: {strGender}</p>
                </div>
              </Col>
              <Col md={6} lg={5}>
                {strGender === "Female" ? (
                  <img className="hr-card-img" src={female} alt={strGender} />
                ) : (
                  <img className="hr-card-img" src={male} alt={strGender} />
                )}
              </Col>
            </Row>
          </div>
        </Container>
        <TeamDetailBottom team={team} />
      </div>
    </>
  );
};

export default TeamDetail;
