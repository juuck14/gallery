import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Detail from '../components/detail';
import ImageFrame from '../components/imageFrame';
import { removeCatImage } from '../redux/catImages/actions';
import { removeDogImage } from '../redux/dogImages/actions';
import { buttonStyle, headerStyle, spinnerStyle } from '../styles/styles';

const Profile = (props: any) => {
    const [url, setUrl] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (image:string) => {
      setUrl(image);
      setShow(true);
    }  
    const remove = (image: string,e:any,type:string) => {
        e.stopPropagation()
        if(type === "dog"){
            props.removeDogImage(image)
        } else if(type === "cat"){
            props.removeCatImage(image)
        }
        
      }
  return (
      <div>
          <h1 style={headerStyle}>Saved images</h1>
          {props.savedDogImages.length + props.savedCatImages.length == 0 ?(<div style={spinnerStyle}>No images :(</div>):
          <>
          <div style={spinnerStyle}>{props.savedDogImages.length + props.savedCatImages.length} images</div>
          <div style={{padding:"2rem"}}>
                {props.savedDogImages.map((image: any, index: number) => (
                <ImageFrame key={index} click={()=>handleShow(image)} url={image} delay={index/20}>
                    <Button variant="primary" onClick={(e: any)=>remove(image, e, "dog")} style={buttonStyle}><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </ImageFrame>
                ))}
                {props.savedCatImages.map((image: any, index: number) => (
                <ImageFrame key={index} click={()=>handleShow(image)} url={image} delay={index/20}>
                    <Button variant="primary" onClick={(e: any)=>remove(image, e, "cat")} style={buttonStyle}><FontAwesomeIcon icon={faTrashAlt}/></Button>
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

const mapStateToProps = ({dog, cat}: any) =>{
    return {
        savedDogImages: dog.savedImages,
        savedCatImages: cat.savedImages
    }
}

const mapDispatchToProps = {
    removeDogImage: (image: string)=>removeDogImage(image),
    removeCatImage: (image: string)=>removeCatImage(image)

}
export default connect(mapStateToProps,mapDispatchToProps)(Profile);
