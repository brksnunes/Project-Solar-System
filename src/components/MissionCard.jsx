import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div data-testid="mission-card" className="mission-card">
        <div className="mission-card-header">
          <p data-testid="mission-name">{ name }</p>
        </div>
        <div className="mission-card-body">
          <p data-testid="mission-year">{ `Ano: ${year}` }</p>
          <p data-testid="mission-country">{ `País: ${country}` }</p>
          <p data-testid="mission-destination">{ `Destino: ${destination}` }</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
