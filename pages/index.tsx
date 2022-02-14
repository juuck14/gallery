import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import Detail from '../components/detail'
import ImageFrame from '../components/imageFrame'
import { fetchDogImage, removeDogImage, saveDogImage } from '../redux/dogImages/actions'
import { movePage } from '../redux/pageInfo/actions'
import { containerStyle, headerStyle, spinnerStyle } from '../styles/styles'

const Home: NextPage = (props: any) => {
  useEffect(() => {
    props.fetchDogImage()
    props.movePage(window.location.pathname,"DogGallery")
  },[])
  
  
  const [url, setUrl] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (image:string) => {
    setUrl(image);
    setShow(true);
  }  

  return (
    <div> 
      <h1 style={headerStyle}>DogGallery</h1>
      <div style={{textAlign: "center"}}><Button variant="info" style={{borderRadius: "100%", color:"white"}} onClick={()=>props.fetchDogImage()}><FontAwesomeIcon icon={faRedo} /></Button></div>
      <div style={containerStyle}>
        {props.loading?(<div style={spinnerStyle}><Spinner animation="border"/></div>):
        <>
        {props.images.map((image: string, index: number) => (
          <ImageFrame key={image} click={()=>handleShow(image)} url={image} delay={index/20} save={()=>props.saveDogImage(image)} 
          remove={()=>props.removeDogImage(image)} type="dog" comment={props.comments[image]?props.comments[image].length:0}>
          </ImageFrame>
          
        ))}

        </>
        }
      </div>
      
      <Detail show={show} hide={handleClose} url={url} type="dog" />
    </div>
  )
}
const mapStateToProps = ({dog, cat}: any) =>{
  return {
      loading: dog.loading,
      images: dog.images,
      comments: dog.comments
  }
}
const mapDispatchToProps: any = {
    saveDogImage: (image:string)=>saveDogImage(image),
    removeDogImage: (image:string)=>removeDogImage(image),
    fetchDogImage,
    movePage: (currentPage:string, title:string)=>movePage(currentPage, title)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
