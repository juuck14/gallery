import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { saveImage, fetchImage } from '../redux/images/actions'
import { connect, useStore } from 'react-redux';
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Modal, Button,Spinner } from 'react-bootstrap'
import Detail from './detail'
import ImageFrame from './imageFrame'
import { faHeart, faUserCircle  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const containerStyle = {
  padding: "4rem"
}

const spinnerStyle = {
  textAlign: "center"
}

const buttonStyle = {
  position: "absolute",
  right: "0",
  bottom: "0"
}

const Home: NextPage = (props: any) => {
  useEffect(() => {
    props.fetchImage()
  },[])
  
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (image:string) => {
    setUrl(image);
    setShow(true);
  }  
  const save = (image: string,e:any) => {
    e.stopPropagation()
    props.saveImage(image)
  }
  return (
    <div> 
      <Head>
        <title>gallery</title>
      </Head>

      <h2>hello world</h2>
      
      <div style={containerStyle}>
        {props.loading?(<div style={spinnerStyle}><Spinner animation="border"/></div>):
        <>
        {props.images.map((image: string, index: any) => (
          <ImageFrame key={index} click={()=>handleShow(image)} url={image}>
            <Button variant="danger" onClick={(e)=>save(image,e)} style={buttonStyle}><FontAwesomeIcon icon={faHeart} /></Button>
          </ImageFrame>
        ))}
        </>
        }
      </div>
      
      <Detail show={show} hide={handleClose} url={url}>
      </Detail>
    </div>
  )
}
const mapStateToProps = (state: { count: Number, images: string[],loading:boolean}) =>{
  return {
      count: state.count,
      loading: state.loading,
      images: state.images
  }
}
const mapDispatchToProps: any = {
    saveImage: (image:String)=>saveImage(image),
    fetchImage
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
