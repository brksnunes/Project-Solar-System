import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missionCardHtmlElement = missions.map((mission) => (<MissionCard
      key={ mission.name }
      name={ mission.name }
      year={ mission.year }
      country={ mission.country }
      destination={ mission.destination }
    />));
    return (
      <div data-testid="missions" className="container">
        <Title headline="Missões" />
        <hr className="stroke" />
        <div className="missions-items">
          { missionCardHtmlElement }
        </div>
      </div>
    );
  }
}

export default Missions;
