import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Button, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styled, { css, keyframes } from 'styled-components';
import { imageFooterStyle, saveButtonStyle } from '../styles/styles';
import { connect } from 'react-redux';


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
    @media only screen and (max-width: 768px) {
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


const ImageFrame = ({click, url, type, delay, save, remove, comment, key, savedImagesDog, savedImagesCat}: any) =>{
  const [savedShow, setSavedShow] = useState(false);
  const [removedShow, setRemovedShow] = useState(false);
  const target = useRef(null);
  let saved = true
  if(type === 'dog'){
    saved = savedImagesDog.includes(url)
  } else if(type === 'cat'){
    saved = savedImagesCat.includes(url)
  }
  const [isSaved, setIsSaved] = useState(saved);
  const Save = (e: any) => {
    e.stopPropagation()
    if(isSaved){
      remove()
      setSavedShow(false)
      setRemovedShow(true)
    }else{
      save()
      setRemovedShow(false)
      setSavedShow(true)
    }
    setIsSaved(!isSaved)
  }
  const hide = () =>{
    setRemovedShow(false)
    setSavedShow(false)
  }
  return (
      <ImageFrameStyle onClick={click} url={url} delay={delay}>
        <div style={imageFooterStyle}>
            <span><FontAwesomeIcon icon={faComment}/> {comment}</span>
            <Button ref={target} onClick={(e: any) => Save(e)} onBlur={hide} style={saveButtonStyle}><FontAwesomeIcon icon={isSaved?faHeart:farHeart} /></Button>
            <Overlay target={target.current} show={savedShow} placement="top">
              {(props) => (
                <Tooltip id="overlay-saved" {...props}>
                  Saved!
                </Tooltip>
              )}
            </Overlay>
            <Overlay target={target.current} show={removedShow} placement="top">
              {(props) => (
                <Tooltip id="overlay-removed" {...props}>
                  Removed!
                </Tooltip>
              )}
            </Overlay>
        </div>
      </ImageFrameStyle>
  )
}
const mapStateToProps = ({dog, cat}: any) =>{
  return {
      savedImagesDog: dog.savedImages,
      savedImagesCat: cat.savedImages
  }
}

export default connect(mapStateToProps)(ImageFrame);
