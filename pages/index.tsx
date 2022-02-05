import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { saveImage } from '../redux/images/actions'
import { connect, useStore } from 'react-redux';
import { useState } from 'react'
import styled from 'styled-components'

const ImageFrameStyle = styled.div`
    border: 1px solid black;
    width: 10rem;
    height: 10rem;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

const ImageFrame = ({children}: any) =>{
  return <ImageFrameStyle>{children}</ImageFrameStyle>
}
const Home: NextPage = (props: any) => {
  const images: Array<String> = ['image1','image2','image3','image4','image5','image6']
  return (
    <div> 
      <Head>
        <title>gallery</title>
      </Head>      
      <h2>hello world</h2>
      <div>
        {images.map((image, index) => (
          <ImageFrame key={index}>
            {image}<button type='button' onClick={()=>props.saveImage(image)}>저장</button>
          </ImageFrame>
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = (state: { count: Number }) =>{
  return {
      count: state.count
  }
}
const mapDispatchToProps: any = {
    saveImage: (image:String)=>saveImage(image)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
