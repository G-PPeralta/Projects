import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { userHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchToken, player } from '../../actions';
import {
  Form,
  StyledInput,
  StyledButton,
  ButtonContainer,
  InputContainer,
  WelcomeText,
  MainContainer,
} from './styles';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      isLoginBtnDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkLoginInput = this.checkLoginInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    return this.setState({ [name]: value }, () => this.checkLoginInput());
  }

  checkLoginInput() {
    const { name, email } = this.state;
    this.setState({
      isLoginBtnDisabled: !(name.length > 0 && email.length > 0),
    });
  }

  async handleClick() {
    const { history } = this.props;
    const { sendPlayerDataToStore } = this.props;
    sendPlayerDataToStore(this.state);
    const { sendTokenToStore } = this.props;
    const token = await sendTokenToStore(fetchToken);
    localStorage.setItem('token', JSON.stringify(token.payload.token));
    history.push('/trivia');
  }

  render() {
    const { name, email, isLoginBtnDisabled } = this.state;
    return (
      <Form>
        <MainContainer>
          <WelcomeText>TRIVIA</WelcomeText>
          <InputContainer>
            <StyledInput
              type="text"
              data-testid="input-player-name"
              id="name"
              name="name"
              onChange={ this.handleChange }
              value={ name }
              placeholder="Nome"
            />
            <StyledInput
              type="email"
              data-testid="input-gravatar-email"
              id="email"
              name="email"
              onChange={ this.handleChange }
              value={ email }
              placeholder="E-mail"
            />
          </InputContainer>
          <ButtonContainer>
            <StyledButton
              type="button"
              data-testid="btn-play"
              disabled={ isLoginBtnDisabled }
              onClick={ this.handleClick }
            >
              Jogar
            </StyledButton>
            <Link to="settings">
              <StyledButton
                type="button"
                data-testid="btn-settings"
              >
                Configurações
              </StyledButton>
            </Link>
          </ButtonContainer>
        </MainContainer>
      </Form>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  sendPlayerDataToStore: PropTypes.func.isRequired,
  sendTokenToStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendTokenToStore: (token) => dispatch(fetchToken(token)),
  sendPlayerDataToStore: (data) => dispatch(player(data)),
});

export default connect(null, mapDispatchToProps)(Login);
