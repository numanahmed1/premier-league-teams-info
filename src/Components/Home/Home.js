import React, { useEffect, useState } from "react";
import TeamCard from "../TeamCard/TeamCard";
import "./Home.css";
import { Container, Row } from "react-bootstrap";
import Banner from "../Banner/Banner";
import staticBg from "../../images/stadium.jpg";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <>
      <Banner text="Premier League Teams Info App" bg={staticBg} />
      <div className="teams-container">
        <Container>
          <Row>
            {teams.map((team) => (
              <TeamCard key={team.idTeam} team={team} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
