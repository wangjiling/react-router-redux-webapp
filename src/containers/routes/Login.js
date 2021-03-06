'use strict';

import React from 'react';
import { login } from '../../actions/';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import LoginComponent from '../../components/LoginComponent';

class Login extends React.Component {
  render() {
    return (
      <LoginComponent
        login={this.props.actions.login}
        loggedIn={this.props.user.login}
      />
    );
  }
}

Login.displayName = 'RoutesLogin';

function mapStateToProps(state) {
  const props = { user: state.user };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { login };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
