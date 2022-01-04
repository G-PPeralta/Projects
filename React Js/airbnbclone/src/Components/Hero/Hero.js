import { Container, Image, Title, Text } from "./styles";

function Hero() {
  return (
    <Container>
      <Image src="../../images/photo-grid.png" alt="grid images" />
      <Title>Online Experiences</Title>
      <Text>
        Join unique interactive activities led by one-of-a-kind hosts--all
        without leaving home.
      </Text>
    </Container>
  );
}

export default Hero;
