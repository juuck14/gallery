import styled, { css, keyframes } from 'styled-components'


interface ImageFrameInterface {
  url: string;
  delay: number;
}
const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const animation = (props:any) =>
  css`
    ${boxFade} 1s linear ${props.delay}s forwards;
  `
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
    opacity: 0;
    animation: ${animation}
    @media only screen and (max-width: 700px) {
        width: 43.99%;
        margin: 3%;
        padding-bottom: 43.99%;
    }
    @media only screen and (max-width: 500px) {
        width: 100%;
        padding-bottom: 100%;
        margin: 5% 0;
    }
`;


const ImageFrame = ({click, children, url, delay}: any) =>{

  
  return (
     <ImageFrameStyle onClick={click} url={url} delay={delay}>{children}</ImageFrameStyle>
  )
}


export default ImageFrame;
