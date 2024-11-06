import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');

  body {
    font-family: 'Nanum Gothic', sans-serif;
  }
  
  @font-face {
    font-family: 'SF_HambakSnow';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export const AppContainer = styled.div`
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  margin-bottom: 20%;
  height: 100%;
`;

// Main container
export const ColorlogContainer = styled.div`
  font-family: "Arial", sans-serif;
  text-align: center;
  color: #333;
  margin-bottom: 20%;
  height: 100%;
`;

// Header styling
export const Header = styled.header`
  background-color: white;
  padding: 30px;
  padding-top: 0;

  h1 {
    font-size: 30px;
    font-weight: normal;
    font-family: "SF_HambakSnow";
    padding: 20px 0 10px 0;
    margin: 0 auto 0 auto;
    width: 50vw;
    box-shadow: 0px 4px 4px 3px rgba(152, 152, 152, 0.25);
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

// Color information section
export const ColorInfo = styled.section`
  background-image: ${({ $backImg }) => `url('${$backImg}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 10px;
  margin-top: 10px;
  height: 390px;
  width: 100%;
  h2 {
    margin: 10px;
    color: #ffffff;
    font-size: 20px;
  }
  h1 {
    margin: 10px auto 0 auto;
    width: 40vw;
    color: ${({ $color }) => $color || "#000000"}; /* Default color added */
    background-color: #ffffff;
    border-radius: 12px;
    font-size: 35px;
    padding-top: 5px;
    padding-bottom: 3px;
  }
`;

// Profile image styling
export const ProfileImage = styled.img`
  width: 110px;
  height: 157.77;
  object-fit: cover;
  margin-top: 20px;
`;

export const ErrorMessage = styled.div`
  font-weight: 500;
  font-family: 'Nanum Gothic'
  font-size: 18px;
  display: flex;
  text-align: center;
  color: #000000;
  padding: 10px;
  margin: 30px;
  justify-content: center;
  align-items: center;
`;

// Options section
export const Options = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 10px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  margin: 16px 0 0 0;
  @media screen and (max-width: 345px) {
    height: 70px;
  }
`;

export const OptionItem = styled.li`
  position: relative;
  text-align: center;
  width: 70px; /* 너비는 필요에 맞게 조정 */

  a {
    display: inline-block;
    text-decoration: none;
    color: #333; /* 텍스트 색상 */
    align-items: center;
  }

  a:before {
    content: "";
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 45px;
    height: 45px;
    margin: 0 auto;
  }

  &:nth-of-type(1) a:before {
    background-image: ${({ $image }) => `url('${$image}')`};
  }

  &:nth-of-type(2) a:before {
    background-image: ${({ $video }) => `url('${$video}')`};
  }

  span {
    display: inline-block;
    color: #ffffff;
    font-size: 14px;
    margin-top: 10px;
    padding: 0 5px;
    text-align: center;
    white-space: nowrap;
  }
`;

// Palette section
export const Palette = styled.section`
  background-color: #ffffff;
  padding: 20px;
  h3 {
    font-size: 25px;
  }
`;

// Color block for palette
export const ColorBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.bgColor};
`;

// Best color section
export const BestColor = styled.section`
  background-color: white;
  padding: 20px;

  h3 {
    font-size: 25px;
  }
`;

// Best color circles container
export const ColorCircles = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`;

export const LineBelowCircles = styled.div`
  width: 80vw;
  height: 3px;
  background-color: lightgray;
  margin: 30px auto 0 auto;
  box-shadow: 0px 2px 2px rgba(134, 134, 134, 0.25);
`;

// Individual circle for best colors
export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  box-shadow: 0px 3px 2.2px rgba(134, 134, 134, 0.25);
`;

// Celebrities section
export const Celebrities = styled.section`
  padding-top: 20px;
  width: 100%;
`;

// Celebrity images container
export const CelebrityImages = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  img {
    width: 30%; /* 이미지 너비를 30%로 설정하여 3개가 한 줄에 나오도록 */
    max-width: 200px; /* 최대 너비를 제한 */
    height: auto; /* 비율을 유지하면서 크기 조정 */
    object-fit: contain; /* 비율을 유지하며 이미지가 잘리지 않도록 */
  }
`;

// CosmeticsList section
export const CosmeticsList = styled.section`
  background-color: white;
  padding-top: 20px;

  h3 {
    position: relative;
    font-size: 27px;
    font-weight: normal;
    font-family: "SF_HambakSnow";
    padding-bottom: 10px;
    margin-bottom: 20px;
    &::after {
      content: "";
      display: block;
      width: 60vw;
      height: 2px; /* 선의 두께 */
      background-color: lightgray; /* 선의 색상 */
      margin: 30px auto 0 auto;
      box-shadow: 0px 2px 2.2px rgba(134, 134, 134, 0.25); /* 그림자 추가 */
    }
  }

  ul {
    padding: 0 !important;
    margin: 0 !important;
    list-style-type: none !important;
  }
`;

// Individual list item for cosmetics
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  margin: 25px auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 2.2px 4.4px 2.2px rgba(134, 134, 134, 0.25);
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 80vw;
`;

// Span for cosmetics details
export const CosmeticsSpan = styled.span`
  font-weight: light;
`;

// Product image on the left
export const ProductImage = styled.img`
  margin: 10px 20px 0 20px;
  padding: 0;
  width: 80px;
  height: 80px;
  object-fit: contain;

  @media screen and (min-width: 320px) and (max-width: 361px) {
    margin: 10px 10px 0 10px;
    padding: 0;
    width: 70px;
    height: 70px;
    object-fit: contain;
  }

  @media screen and (min-width: 362px) and (max-width: 376px) {
    margin: 10px 10px 0 15px;
    padding: 0;
    width: 70px;
    height: 70px;
    object-fit: contain;
  }

  @media screen and (min-width: 377px) and (max-width: 391px) {
    margin: 10px 10px 0 15px;
    padding: 0;
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  @media screen and (min-width: 392px) and (max-width: 426px) {
    margin: 10px 10px 0 15px;
    padding: 0;
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  @media screen and (min-width: 427px) and (max-width: 720px) and (orientation: portrait) {
  }
`;

// Container for product info (name and description)
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  flex: 1;
  @media screen and (min-width: 320px) and (max-width: 345px) {
    font-size: 12px;
  }
  @media screen and (min-width: 346px) and (max-width: 361px) {
    font-size: 13px;
  }

  @media screen and (min-width: 362px) and (max-width: 376px) {
    font-size: 13px;
  }

  @media screen and (min-width: 377px) and (max-width: 391px) {
    font-size: 13px;
  }

  @media screen and (min-width: 392px) and (max-width: 426px) {
    font-size: 14px;
  }

  @media screen and (min-width: 427px) and (max-width: 720px) and (orientation: portrait) {
  }
`;

export const BrandAndName = styled.div`
  display: flex;
  align-items: center; /* brand와 name을 같은 줄에 정렬 */
  gap: 8px; /* brand와 name 사이에 간격 추가 */
  padding-bottom: 10px;
  @media screen and (min-width: 320px) and (max-width: 345px) {
    font-size: 12px;
  }
  @media screen and (min-width: 346px) and (max-width: 361px) {
    font-size: 13px;
  }

  @media screen and (min-width: 362px) and (max-width: 376px) {
    font-size: 13px;
  }

  @media screen and (min-width: 377px) and (max-width: 391px) {
    font-size: 13px;
  }

  @media screen and (min-width: 392px) and (max-width: 426px) {
    font-size: 14px;
  }

  @media screen and (min-width: 427px) and (max-width: 720px) and (orientation: portrait) {
  }
`;

// Brand (bold 스타일 적용)
export const Brand = styled.span`
  font-weight: nomal;
  font-size: 1rem;
  font-family: "SF_HambakSnow";
  color: #333;
`;

// Product name (aligned to the top-right)

// export const ProductName = styled.h3`
//   font-size: 1.2rem;
//   font-weight: bold;
//   margin: 0;
//   color: #333;
// `;

// // Description (aligned to the bottom-right)
// export const ProductDescription = styled.p`
//   font-size: 1rem;
//   margin: 0;
//   color: #555;
//   align-self: flex-end; /* Aligns the description to the bottom-right */
// `;
