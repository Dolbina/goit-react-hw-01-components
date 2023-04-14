import styled from "styled-components";


export const InfoFriend = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px;
  width: 150px;
  height: auto;
  padding: 10px;
  background-color: beige;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: ${({ isOnline  }) => {
    if (isOnline === true) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;