import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
// oliva <3
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
