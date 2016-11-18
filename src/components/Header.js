require('styles/Header.css');

import React from 'react';
import { Link } from 'react-router';

let yeomanImage = require('../images/react.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice"><Link to="/login">react-router-redux example jsdfh sdf sdf</Link></div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
