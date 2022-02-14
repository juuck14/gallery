import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Detail from '../components/detail';
import ImageFrame from '../components/imageFrame';
import { removeCatImage, saveCatImage } from '../redux/catImages/actions';
import { removeDogImage, saveDogImage } from '../redux/dogImages/actions';
import { buttonStyle, headerStyle, spinnerStyle } from '../styles/styles';

const Profile = (props: any) => {
    const [url, setUrl] = useState("");
    const [type, setType] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (image:string, type: string) => {
        setType(type)
        setUrl(image);
        setShow(true);
    }  
  return (
      <div>
          <h1 style={headerStyle}>Saved images</h1>
          {props.savedDogImages.length + props.savedCatImages.length == 0 ?(<div style={spinnerStyle}>No images :(</div>):
          <>
          <div style={spinnerStyle}>{props.savedDogImages.length + props.savedCatImages.length} images</div>
          <div style={{padding:"2rem"}}>
                {props.savedDogImages.map((image: any, index: number) => (
                    <ImageFrame key={image} click={()=>handleShow(image, "dog")} url={image} delay={index/20} save={()=>props.saveDogImage(image)} remove={()=>props.removeDogImage(image)} type="dog" comment={props.dogComments[image]?props.dogComments[image].length:0}>
                    </ImageFrame>
                ))}
                {props.savedCatImages.map((image: any, index: number) => (
                    <ImageFrame key={image} click={()=>handleShow(image, "cat")} url={image} delay={index/20} save={()=>props.saveCatImage(image)} remove={()=>props.removeCatImage(image)} type="cat" comment={props.catComments[image]?props.catComments[image].length:0}>
                    </ImageFrame>
                ))}
            </div>
            </>
            }
        <Detail show={show} hide={handleClose} url={url} type={type}>
        </Detail>
      </div>
  );
};

const mapStateToProps = ({dog, cat}: any) =>{
    return {
        savedDogImages: dog.savedImages,
        savedCatImages: cat.savedImages,
        dogComments: dog.comments,
        catComments: cat.comments
    }
}

const mapDispatchToProps = {
    saveDogImage: (image:string)=>saveDogImage(image),
    saveCatImage: (image:string)=>saveCatImage(image),
    removeDogImage: (image: string)=>removeDogImage(image),
    removeCatImage: (image: string)=>removeCatImage(image)

}
export default connect(mapStateToProps,mapDispatchToProps)(Profile);
