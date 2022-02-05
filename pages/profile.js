import React from 'react';
import { connect } from 'react-redux';
import { removeImage } from '../redux/images/actions'

const profile = (props) => {
  return (
      <div>
          <h2>this is your profile</h2>
          <p>사진 수: {props.count}</p>
          <p>사진: {props.images.map((image) => <h2>{image} <button type="button" onClick={()=>props.removeImage(image)}>삭제</button><br/></h2>)}</p>
      </div>
  );
};

const mapStateToProps = (state) =>{
    return {
        count: state.count,
        images: state.images
    }
}

const mapDispatchToProps = {
    removeImage: (image)=>removeImage(image)
}
export default connect(mapStateToProps,mapDispatchToProps)(profile);
