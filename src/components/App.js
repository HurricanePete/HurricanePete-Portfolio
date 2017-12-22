import React from 'react';

import Bio from './bio';
import ProjectSection from './projectSection';

import './styles/App.css';
import './styles/response-grid.css';

class App extends React.Component {
  render() {
    return (
      <main className="pa5">
        <Bio />
        <ProjectSection />
      </main>
    );
  }
}

export default App;
