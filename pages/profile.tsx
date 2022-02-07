import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Detail from '../components/detail';
import ImageFrame from '../components/imageFrame';
import { removeImage } from '../redux/images/actions';
import { buttonStyle, headerStyle, spinnerStyle } from '../styles/styles';

const Profile = (props: any) => {
    const [url, setUrl] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (image:string) => {
      setUrl(image);
      setShow(true);
    }  
    const remove = (image: string,e:any) => {
        e.stopPropagation()
        props.removeImage(image)
      }
  return (
      <div>
          <h1 style={headerStyle}>Saved images</h1>
          {props.savedImages.length == 0 ?(<div style={spinnerStyle}>No images :(</div>):
          <>
          <div style={spinnerStyle}>{props.savedImages.length} images</div>
          <div style={{padding:"2rem"}}>
                {props.savedImages.map((image: any, index: number) => (
                <ImageFrame key={index} click={()=>handleShow(image)} url={image} delay={index/20}>
                    <Button variant="primary" onClick={(e: any)=>remove(image, e)} style={buttonStyle}><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </ImageFrame>
                ))}
            </div>
            </>
            }
        <Detail show={show} hide={handleClose} url={url}>
        </Detail>
      </div>
  );
};

const mapStateToProps = (state: any) =>{
    return {
        savedImages: state.savedImages
    }
}

const mapDispatchToProps = {
    removeImage: (image: string)=>removeImage(image)
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile);
