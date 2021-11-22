function MainImage({ src }) { 
    return(
        <img
          alt=" Imagem maior"
          style={{ display: "flex", height: "500px" }}
          src={src}
        />
    )
}
export default MainImage;