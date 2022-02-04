import React from 'react';
import { connect } from 'react-redux';

const profile = (props) => {
  return (
      <div>
          <h2>this is your profile</h2>
          <p>사진 수: {props.count}</p>
          <p>사진: {props.images.map((image) => <h2>{image}<br/></h2>)}</p>
      </div>
  );
};

const mapStateToProps = (state) =>{
    return {
        count: state.count,
        images: state.images
    }
}

export default connect(mapStateToProps)(profile);
