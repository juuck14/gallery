import React from 'react';
import { connect } from 'react-redux';
import { removeImage } from '../redux/images/actions'
import ImageFrame from './imageFrame'
import { Modal, Button } from 'react-bootstrap'

const buttonStyle = {
    position: "absolute",
    right: "0",
    bottom: "0"
}

const profile = (props) => {
  return (
      <div>
          <h2>this is your profile</h2>
          <p>사진 수: {props.count}</p>
          <p>사진:</p>
          <div style={{padding:"2rem"}}>
                {props.savedImages.map((image, index) => (
                <ImageFrame key={index} url={image}>
                    <Button variant="primary" onClick={()=>props.removeImage(image)} style={buttonStyle}>삭제</Button>
                </ImageFrame>
                ))}
            </div>
      </div>
  );
};

const mapStateToProps = (state) =>{
    return {
        count: state.count,
        savedImages: state.savedImages
    }
}

const mapDispatchToProps = {
    removeImage: (image)=>removeImage(image)
}
export default connect(mapStateToProps,mapDispatchToProps)(profile);
