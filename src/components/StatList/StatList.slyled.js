import styled from "styled-components";
import { getRandomHexColor } from "components/RandomColors";


export const InfoList = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding: 15px;
  border: 2px solid gray;
  border-radius: 2px;
  background-color: ${getRandomHexColor};
`;
