import React from 'react';
import { connect } from 'react-redux';

const profile = (props) => {
  return (
      <div>
          <h2>this is your profile</h2>
          <p>사진 수: {props.count}</p>
      </div>
  );
};

const mapStateToProps = (state) =>{
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(profile);
