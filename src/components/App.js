import React from 'react';
import Header from "./Header";
import KegControl from "./KegControl";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div id="Header">
        <Header />
      </div>
      <div id="KegControl">
        <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
