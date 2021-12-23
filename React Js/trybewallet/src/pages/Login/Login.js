import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { user } from '../../actions/index';
import {
  Form,
  StyledInput,
  StyledButton,
  ButtonContainer,
  InputContainer,
  WelcomeText,
  MainContainer,
} from './styles';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    return this.setState({ [name]: value });
  }

  handleClick() {
    const { history, sendEmailToGlobalState } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    sendEmailToGlobalState(email);
  }

  emailValidation() {
    const { email } = this.state;
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    return regex.test(email);
  }

  passwordValidation() {
    // A senha deve possuir 6 ou mais caracteres.
    const { password } = this.state;
    const maxCharactersAllowed = 6;

    if (password.length >= maxCharactersAllowed) {
      return password;
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <Form>
        <MainContainer>
          <WelcomeText>TRYBEWALLET</WelcomeText>
          <InputContainer>
            <StyledInput
              type="email"
              data-testid="email-input"
              placeholder="E-mail"
              value={ email }
              name="email"
              onChange={ this.handleChange }
            />
            <StyledInput
              type="password"
              data-testid="password-input"
              placeholder="Senha"
              value={ password }
              name="password"
              onChange={ this.handleChange }
            />
          </InputContainer>
          <ButtonContainer>
            <StyledButton
              type="button"
              onClick={ this.handleClick }
              disabled={ !(this.passwordValidation() && this.emailValidation()) }
            >
              Entrar
            </StyledButton>
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
  sendEmailToGlobalState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendEmailToGlobalState: (email) => dispatch(user(email)),
});

export default connect(null, mapDispatchToProps)(Login);
