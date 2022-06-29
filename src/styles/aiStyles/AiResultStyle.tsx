import styled from "styled-components";

import { MapBinDatailsContainer } from "../../styles/mapStyles/mapStyle";

export const AiResultSubjectSection = styled.section`
  /* background: lightblue; */

  /* margin-top: 2rem; */
  /* margin-bottom: 1rem; */

  display: flex;
  text-align: center;
  align-items: center;
`;

export const AiResultSubjectName = styled.div`
  font-size: 1rem;

  margin-right: 1rem;
  margin-bottom: 0.1rem;
`;

export const AiResultSubjectTexture = styled.div`
  color: #9eacba;
  font-size: 0.7rem;
  font-weight: 500;
`;

export const AiResultContentsSection = styled.section`
  /* display: block; */
  display: flex;

  @media screen and (min-width: 768px) {
  }
`;

export const ListContainer = styled.div`
  margin-bottom: 2rem;
`;

export const List = styled.li`
  margin: 0.5rem 0;

  font-size: 0.6rem;

  list-style-position: inside;
  /* text-indent: -0.9rem; */
`;

export const AiResultContentContainer = styled.div`
  /* margin-top: 2rem;
  margin-bottom: 3rem; */
  padding: 0.5rem 1rem;
  margin-bottom: 3rem;

  flex: 1;
  text-align: center;

  background: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

export const AiResultSummaryContainer = styled.div`
  /* margin-top: 2rem;
  margin-bottom: 3rem; */
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;

  padding: 0.3rem 0.5rem;

  /* flex: 1; */
  /* text-align: center; */

  display: flex;

  background: white;
  border-radius: 0.3rem;
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15); */

  background: #51cf66;

  /* box-shadow: 0px 0px 20px rgb(0 0 0 / 20%); */
`;

export const AiResultMidSummaryContainer = styled(AiResultSummaryContainer)`
  @media screen and (min-width: 768px) {
    margin: 2rem 1rem;
    margin-bottom: 3rem;
  }
`;

export const AiResultSummaryTitleWrapper = styled.div`
  /* margin-bottom: 0.5rem; */
  margin-right: 0.5rem;

  font-size: 0.5rem;
  font-weight: 500;
  color: white;
`;

export const AiResultSummaryDesWrapper = styled.div`
  font-size: 0.5rem;

  color: white;
`;

export const AiResultDesContainer = styled(AiResultContentContainer)`
  margin: 1rem 0;
  margin-bottom: 2rem;

  text-align: left;
`;

export const AiResultDesLastContainer = styled(AiResultDesContainer)`
  margin-bottom: 2rem;
`;

export const MapTitleContainer = styled.div`
  /* display: flex; */

  align-items: center;

  @media screen and (min-width: 768px) {
    display: inline-flex;
  }
`;

export const MapContainer = styled.div`
  margin-top: 0.8rem;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const AiMapListContainer = styled.div`
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    height: 10rem;
    width: 50%;

    margin-top: 0;
    margin-left: 1rem;

    overflow: auto;
  }
`;
