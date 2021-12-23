import PropTypes from 'prop-types';
import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { Content, Text, Title } from './styles';
// import logo from '../trivia.png';

class Header extends Component {
  render() {
    const { name, email, score } = this.props;
    const hashGerada = md5(email).toString();
    const gravatar = `https://www.gravatar.com/avatar/${hashGerada}`;
    return (
      <Content>
        {/* <img src={ logo } className="App-logo" alt="logo" /> */}
        <Title>SUA VEZ</Title>
        <img data-testid="header-profile-picture" src={ gravatar } alt="gravatar" />
        <Text data-testid="header-player-name">{ name }</Text>
        <Text data-testid="header-score">{ score }</Text>
      </Content>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.playerDataReducer.player.name,
  email: state.playerDataReducer.player.email,
  score: state.playerDataReducer.score,
});

export default connect(mapStateToProps)(Header);
