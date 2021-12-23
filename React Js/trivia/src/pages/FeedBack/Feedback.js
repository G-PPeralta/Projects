import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { Content, ButtonContainer, StyledButton, Container, Text } from './styles';

class Feedback extends Component {
  constructor() {
    super();
    this.sendRankingToLocalStorage = this.sendRankingToLocalStorage.bind(this);
  }

  sendRankingToLocalStorage() {
    const { name, score } = this.props;
    const gravatar = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y';
    const currentPlayer = {
      name,
      picture: gravatar,
      score,
    };
    const prevRankingInLS = JSON.parse(localStorage.getItem('ranking'));
    if (!prevRankingInLS) {
      const initialRankingInLS = [currentPlayer];
      localStorage.setItem('ranking', JSON.stringify(initialRankingInLS));
    } else {
      const allPlayers = [...prevRankingInLS, currentPlayer];
      localStorage.setItem('ranking', JSON.stringify(allPlayers));
    }
  }

  render() {
    const dataLocalStorage = JSON.parse(localStorage.getItem('state'));
    const playerAssertions = dataLocalStorage.player.assertions;
    const playerScore = dataLocalStorage.player.score;
    const parameter = 3;
    return (
      <>
        <Header />
        <Content>
          <Container>
            <h1 data-testid="feedback-text">
              {playerAssertions < parameter ? 'Podia ser melhor...' : 'Mandou bem!'}
            </h1>
            <Text data-testid="feedback-total-score">
              Placar Final:
              {' '}
              {playerScore}
            </Text>
            <Text data-testid="feedback-total-question">
              Acertos:
              {' '}
              {playerAssertions}
            </Text>
          </Container>
          <ButtonContainer>
            <Link to="/">
              <StyledButton type="button" data-testid="btn-play-again">
                Jogar novamente
              </StyledButton>
            </Link>
            <Link to="ranking">
              <StyledButton
                type="button"
                data-testid="btn-ranking"
                onClick={ this.sendRankingToLocalStorage() }
              >
                Ver Ranking
              </StyledButton>
            </Link>
          </ButtonContainer>
        </Content>
      </>
    );
  }
}

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.playerDataReducer.player.name,
  score: state.playerDataReducer.score,
});

export default connect(mapStateToProps)(Feedback);
