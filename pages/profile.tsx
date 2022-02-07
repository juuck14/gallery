import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import ImageFrame from '../components/imageFrame';
import { removeImage } from '../redux/images/actions';
import { buttonStyle } from '../styles/styles';

const profile = (props: any) => {
  return (
      <div>
          <h2>this is your profile</h2>
          <p>사진 수: {props.savedImages.length}</p>
          <p>사진:</p>
          <div style={{padding:"2rem"}}>
                {props.savedImages.map((image: any, index: number) => (
                <ImageFrame key={index} url={image} delay={index/20}>
                    <Button variant="primary" onClick={()=>props.removeImage(image)} style={buttonStyle}>삭제</Button>
                </ImageFrame>
                ))}
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(profile);
