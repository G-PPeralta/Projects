import styled from "styled-components";

export const Container = styled.div`
  width: 175px;
  font-size: 12px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardBadge = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  background-color: white;
  padding: 5px 7px;
  border-radius: 2px;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 9px;
  margin-bottom: 9px;
`;

export const CardStar = styled.img`
  height: 14px;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #918e9b;
  }
`;

export const CardTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardPrice = styled.p`
  margin-top: auto;
`;
