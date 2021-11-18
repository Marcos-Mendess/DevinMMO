import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 
  h1 { 
    padding: 0;
    margin: 0;
  }

  .game-image { 
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border : 1px solid #CCC;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
}

.pokemon { 

max-width: 150px;
height: 250px;

border-radius: 10px;

border:1px solid;

display: flex;
flex-direction: column;
gap: 10px;

align-items: center;

box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}




 .card-image { 
  margin-top: 5px;
  width: 290px;
  height: 100px;
  border : 0ch,1px solid #CCC;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  border-radius:3%;
 }
 
`
