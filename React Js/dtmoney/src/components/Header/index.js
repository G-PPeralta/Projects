import React from "react";
import logoImg from "../../logo.svg"
import { Container, Content } from "./styles";

export const Header = (props) => {

  const { onOpenNewTransactionModal } = props;
  
  return (
    <Container>
      <Content>
        <img src={ logoImg } alt="dt money" />
        <button type="button" onClick={ onOpenNewTransactionModal }>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}