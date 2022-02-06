import styled from 'styled-components'


interface ImageFrameInterface {
  url: string;
}
const ImageFrameStyle = styled.div<ImageFrameInterface>`
    background: ${(props:any) => `url(${props.url}) no-repeat top center`};
    background-size: cover;
    display: inline-block;
    margin: 1%;
    width: 22.74%;
    padding-bottom: 22.74%;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    @media only screen and (max-width: 700px) {
        width: 47.99%;
        padding-bottom: 47.99%;
    }
    @media only screen and (max-width: 500px) {
        width: 100%;
        padding-bottom: 100%;
        margin: 0;
    }
`;


const ImageFrame = ({click, children, url}: any) =>{
  return <ImageFrameStyle onClick={click} url={url}>{children}</ImageFrameStyle>
}


export default ImageFrame;
