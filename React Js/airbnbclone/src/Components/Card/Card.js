import { Container, Image, CardStar, CardStats, CardTitle, CardPrice, CardBadge } from "./styles";

function Card({ img, location, rating, reviewCount, country, title, price, openSpots }) {

  let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    
  return (
    <Container>
      {badgeText && <CardBadge>{ badgeText }</CardBadge>}
      <Image src={`../../images/${img}`} alt="Card" />
      <CardStats>
        <CardStar src="../../images/star.png" alt="Star Icon" />
        <span>{rating}</span>
        <span>({reviewCount}) •</span>
        <span>{country}</span>
      </CardStats>
      <CardTitle>{title}</CardTitle>
      <CardPrice><strong>From ${price}</strong> / person</CardPrice>
    </Container>
  );
}

export default Card;
