import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetHtmlelement = planets.map((planet) => (<PlanetCard
      key={ planet.name }
      planetName={ planet.name }
      planetImage={ planet.image }
    />));
    return (
      <div data-testid="solar-system" className="container">
        <Title headline="Planetas" />
        <div className="solar-system-items">
          { planetHtmlelement }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
