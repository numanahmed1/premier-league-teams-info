import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./TeamCard.css";
import { useHistory } from "react-router";

const TeamCard = ({ team }) => {
  const { strTeamBadge, strTeam, strSport, idTeam } = team;
  const history = useHistory();
  const handleExploreBtn = (id) => {
    const url = `/team/${id}`;
    history.push(url);
  };

  return (
    <Col className="mt-3" sm={12} md={4}>
      <Card className="team-card">
        <Card.Img className="team-badge" variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title className="team-name">{strTeam}</Card.Title>
          <Card.Text className="team-type">Sports type: {strSport}</Card.Text>
          <Button
            onClick={() => handleExploreBtn(idTeam)}
            className="team-btn"
            variant="default"
          >
            Explore <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeamCard;
