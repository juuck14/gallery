import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { saveImage } from '../redux/images/actions'
import { connect, useStore } from 'react-redux';
import { useState } from 'react'
import styled from 'styled-components'
import { Modal, Button } from 'react-bootstrap'
import Detail from './detail'

const ImageFrameStyle = styled.div`
    border: 1px solid black;
    width: 10rem;
    height: 10rem;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

const ImageFrame = ({click, children}: any) =>{
  return <ImageFrameStyle onClick={click}>{children}</ImageFrameStyle>
}
const Home: NextPage = (props: any) => {
  const images: Array<string> = ['image1','image2','image3','image4','image5','image6']
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (image:string) => {
    setTitle(image);
    setShow(true);
  }  
  const save = (image: string,e:any) => {
    e.stopPropagation()
  }
  return (
    <div> 
      <Head>
        <title>gallery</title>
      </Head>      
      <h2>hello world</h2>
      <div>
        {images.map((image, index) => (
          <ImageFrame key={index} click={()=>handleShow(image)}>
            {image}<Button variant="primary" onClick={(e)=>save(image,e)}>저장</Button>
          </ImageFrame>
        ))}
      </div>
      <Detail show={show} hide={handleClose} title={title}>
      </Detail>
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
