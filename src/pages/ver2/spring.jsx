import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  AppContainer,
  ColorlogContainer,
  Header,
  ColorInfo,
  ProfileImage,
  Options,
  OptionItem,
  Palette,
  BestColor,
  ColorCircles,
  Circle,
  Celebrities,
  CelebrityImages,
  CosmeticsList,
  ListItem,
  CosmeticsSpan,
  ProductImage,
  ProductInfo,
  BrandAndName,
  Brand,
  LineBelowCircles,
  GlobalStyle,
} from "./style";
import BackImg from "../../images/back_spring.png";
import Face1 from "../../images/spr_face11.png";
import Face2 from "../../images/spr_face22.png";
import Face3 from "../../images/spr_face33.png";
import Image from "../../icons/spr_Image.png";
import Video from "../../icons/spr_Video.png";
import Lip1 from "../../images/spr_lip1.png"; // 이미지 파일 추가
import Lip2 from "../../images/spr_lip2.png"; // 이미지 파일 추가
import Lip3 from "../../images/spr_lip3.png"; // 이미지 파일 추가

const Colorlog = () => {

  const { userId } = useParams();
    //const navigate = useNavigate();
  const [result, setResult] = useState('');
  const [resultImagePath, setResultImagePath] = useState('');
  const [facePaletteImagePath, setFacePaletteImagePath] = useState('');
  const [mediaUrls, setMediaUrls] = useState({ imagePath: "", videoPath: "" });

  useEffect(() => {
    axios.get(`https://colorlogs.site/api/api/user/get_result`, {
        params: { userId }
    })
        .then(response => {
            setResult(response.data.result);
            setResultImagePath(response.data.imagePath.resultImagePath);
            setFacePaletteImagePath(response.data.imagePath.facePaletteImagePath);
        })
        .catch(error => console.error('There was an error!', error));
}, [userId]);

useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get('https://colorlogs.site/api/api/photogroup/get_photogroup', {
                params: { userId }
            });
            setMediaUrls(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData();
}, [userId]);

const handleClick1 = () => {
    downloadFile(mediaUrls.imagePath, "jpeg");
    alert(`이미지가 다운로드됩니다.`);
};

const handleClick2 = () => {
    downloadFile(mediaUrls.videoPath, "mp4");
    alert(`동영상이 다운로드됩니다.`);
};


function downloadFile(url, extension) {
    const now = new Date();
    const minutes = now.getMinutes();  // 올바른 메서드 사용
    const filename = `file_${minutes}.${extension}`;

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


  const cosmeticsData = [
    {
      id: 1,

      brand: "YSL ",
      name: "- 워터 스테인",
      description: "605호 뱅드코랄",
      image: Lip1, // 이미지 추가
    },
    {
      id: 2,
      brand: "peripera ",
      name: "- 잉크더에리어벨벳",
      description: "8호 최예쁨템",
      image: Lip2, // 이미지 추가
    },
    {
      id: 3,
      brand: "HERA ",
      name: "- 센슈얼 누드 글로스",
      description: "422호 란제리",
      image: Lip3, // 이미지 추가
    },
  ];

  useEffect(() => {
    const metaTag = document.createElement("meta");
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=1.0, viewport-fit=cover";
    document.getElementsByTagName("head")[0].appendChild(metaTag);
  }, []);

  return (
    <AppContainer>
      <ColorlogContainer>
        <Header>
          <GlobalStyle />
          <h1>colorlog</h1>
        </Header>

        <ColorInfo $backImg={BackImg} $color="#F6D3DD">
          <h2>당신의 컬러:</h2>
          <h1>봄 웜톤</h1>
          <ProfileImage src={resultImagePath} alt="Color Tone" />
          <Options $backgroundColor="rgba(145, 80, 100, 0.5)">
            <OptionItem $image={Image} onClick={handleClick1}>
            <a href={`/user/${userId}`}>
                <span onClick={handleClick1}>네컷 저장</span>
              </a>
            </OptionItem>
            <OptionItem $video={Video} onClick={handleClick2}>
              <a href={`/user/${userId}`}>
                <span onClick={handleClick2}>동영상 저장</span>
              </a>
            </OptionItem>
          </Options>
        </ColorInfo>

        <Palette>
          <h3>face palette</h3>
          <img src={facePaletteImagePath} alt="Face palette image" style={{ width: "55vw" }} />
          <p>얼굴에서 추출된 색상 팔레트입니다.</p>
        </Palette>

        <BestColor>
          <h3>best color</h3>
          <ColorCircles>
            <Circle bgColor="#F9D7E5" />
            <Circle bgColor="#F097B8" />
            <Circle bgColor="#F09040" />
            <Circle bgColor="#F8F489" />
            <Circle bgColor="#92C83D" />
            <Circle bgColor="#5FCFFA" />
          </ColorCircles>
          <LineBelowCircles />
        </BestColor>

        <Celebrities>
          <p>봄 웜톤의 대표적인 연예인으로는</p>
          <p>
            {" "}
            <strong>아이유</strong>님, <strong>수지</strong>님,{" "}
            <strong>윤아</strong>님이 있습니다.
          </p>
          <CelebrityImages bgColor="#F6D3DD">
            <img src={Face1} alt="Celebrity 1" />
            <img src={Face2} alt="Celebrity 2" />
            <img src={Face3} alt="Celebrity 3" />
          </CelebrityImages>
        </Celebrities>

        <CosmeticsList>
          <GlobalStyle />
          <h3>Cosmetics List</h3>
          <ul>
            {cosmeticsData.map((item) => (
              <ListItem key={item.id}>
                <ProductImage src={item.image} alt={item.name} />
                <ProductInfo>
                  <BrandAndName>
                    <GlobalStyle />
                    <Brand>{item.brand}</Brand>
                    <span>{item.name}</span>
                  </BrandAndName>
                  <CosmeticsSpan>{item.description}</CosmeticsSpan>
                </ProductInfo>
              </ListItem>
            ))}
          </ul>
        </CosmeticsList>
      </ColorlogContainer>
    </AppContainer>
  );
};

export default Colorlog;