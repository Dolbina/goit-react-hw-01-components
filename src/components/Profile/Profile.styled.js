import styled from 'styled-components';

export const List = styled.div`
  max-width: 200px;
  border: 2px solid gray;
  border-radius: 2px;
  padding: 8px;
  text-align: center;
`;

export const StatsInfo = styled.ul`
  display: flex;
  gap: 5px;
  margin-top: 15px;
  justify-content: space-around;
`;

export const InfoBlock = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  border: 1px solid gray;
  padding: 5px;
`;
export const Name = styled.p`
font-weight: 700;
font-size: 20px;
margin-top: 5px;
`
export const Text = styled.p`
color: gray;
margin-top: 5px;
font-size: 14px;
`