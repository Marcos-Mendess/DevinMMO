import styled from "styled-components";

export const StyledCard = styled.div`
  overflow: hidden;
  width: 300px;
  height: 350px;
  border-radius: 10px;
  background-color: lightblue;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  p {
    overflow:hidden;
    height:100%;
    text-overflow: ellipsis;
  }

  > div {
    text-overflow: ellipsis;
    padding: 0 16px;
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    strong {
      text-transform: uppercase;
    }
    +div{ 
        overflow:hidden;
        height:72px;
        text-overflow: ellipsis;
        padding-bottom:16px;
    }
  }
`;

export const StyledGameContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledGameImg = styled.img`
  margin-top: 3px;
  width: 294px;
  height: 150px;
  border: 0ch, 1px solid #ccc;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  border-radius: 3%;
`;

export const StyledPlatform = styled.div`
  border: 1px solid grey;
  border-radius: 16px;
  padding: 2px 22px;
  font-size: 12px;
  font-weight:bold;
`;

export const StyledGameInformations = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

export const StyledGameDescriptions = styled.div` 
    height:5px;

`
