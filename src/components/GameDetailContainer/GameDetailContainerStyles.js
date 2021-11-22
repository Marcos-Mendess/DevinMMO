import styled from "styled-components";

export const ImagesInline = styled.div`
    display: inline-block;
    height: 150px;
    align-items: center;

  img {
    width: 150px;
    margin-right: 16px;
    margin-top: 16px;
    height: 100px;
  }
`;

export const Container = styled.div`
  width: 50%;
  margin: 20px auto;

  span {
    margin-left: 30px;
    font-size: 20px;
  }

  h1{
    margin:20px 0;
  }
  h2{
    margin:20px 0;
  }
  p{
    font-size:20px;
  }
`;

export const DescriptionStyle=styled.div`
  width:888px;
  height:100px;
  overflow:hidden;
    height:100%;
    text-overflow: ellipsis;
  margin:20px 0px;
`
