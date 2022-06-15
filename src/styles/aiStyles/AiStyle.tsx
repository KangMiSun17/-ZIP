import styled from "styled-components";

import { Button } from "../ButtonStyles";

// 공통
export const AiContentTitle = styled.span`
  font-size: 0.8rem;
`;

export const AiContentText = styled.span`
  font-size: 0.6rem;
`;

export const AiImageUploadSection = styled.div`
  margin: 1rem 3rem;
`;

export const AiImageContainer = styled.div`
  background: #9eacba;

  width: 100%;
  height: 13rem;

  margin-bottom: 0.5rem;

  display: flex;
  justify-content: center;

  border-radius: 0.5rem;

  overflow: hidden;

  position: relative;
`;

export const CameraShutterWrapper = styled.div`
  z-index: 100;

  bottom: 5px;
  position: absolute;
`;

export const CameraShutterIcon = styled.img`
  width: 2rem;
`;

export const CameraButton = styled.button`
  width: 3rem;
  height: 3rem;
`;

export const AiImageLayer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  display: flex;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));

  top: 0;
  left: 0;
`;

export const AiSpinImg = styled.img`
  margin: auto;

  width: 15%;
`;

export const AiImage = styled.img`
  /* background: blue; */

  width: 100%;
  object-fit: cover;
`;

export const AiIconsContainer = styled.div`
  /* background: goldenrod; */

  display: flex;
  align-items: center;
`;

export const AiIcon = styled.img`
  width: 1rem;
  height: auto;

  margin-right: 0.2rem;
  display: flex;

  cursor: pointer;
`;

export const AiTopContainer = styled.div`
  /* background: green; */

  margin: 0 1rem;
  margin-bottom: 3rem;

  display: flex;
`;

export const AiNoticeWrapper = styled.div`
  /* background: gray; */

  font-size: 0.8rem;
`;

export const AiButtonWrapper = styled.div`
  /* background: brown; */

  flex-grow: 1;
`;

export const AiButton = styled(Button)<{
  situation: string;
}>`
  height: 100%;

  padding: 0.3rem 1.2rem;

  float: right;

  border-radius: 0.3rem;

  font-size: 0.6rem;

  cursor: ${(props) =>
    (props.situation === "beforeImgUpload" ||
      props.situation === "analyzing") &&
    "default"};

  background: ${(props) =>
    // ?이미지 업로드 전
    // 이미지 업로드 false, 분석 중 false, 분석 완료 false

    // ?분석 중
    // 이미지 업로드 false, 분석 중 true, 분석 완료 false

    // ! 안 하는 경우
    // ?분석 완료
    // 이미지 업로드 false, 분석 중 false, 분석 완료 true
    (props.situation === "beforeImgUpload" ||
      props.situation === "analyzing") &&
    "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #21A663"};
`;

export const AiGuideSection = styled.div`
  /* background: lightyellow; */

  width: 100%;

  margin-bottom: 2rem;
`;

export const AiGuidesTitle = styled(AiContentTitle)`
  color: #9eacba;
`;

export const AiGuidesContainer = styled.div`
  margin-top: 0.8rem;
  padding: 1rem;

  display: grid;
  justify-items: center;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
`;

export const AiGuideContainer = styled.div`
  /* background: lightgreen; */

  width: fit-content;

  margin: 0.5rem;

  text-align: center;
`;

export const AiGuideImgWrapper = styled.div`
  /* background: lightblue; */

  width: 10rem;
  height: 5.5rem;

  display: flex;

  margin: auto;

  overflow: hidden;

  justify-content: center;
`;

export const AiGuideImg = styled.img`
  width: 100%;

  object-fit: cover;

  /* transform: translate(0px, -10px); */
`;

export const AiGuideTitle = styled(AiContentText)`
  color: #9eacba;
`;
