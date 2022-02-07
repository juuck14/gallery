import { faHeart, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Button, OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap'
import { connect } from 'react-redux'
import Detail from '../components/detail'
import ImageFrame from '../components/imageFrame'
import { fetchImage, saveImage } from '../redux/images/actions'
import { buttonStyle, containerStyle, headerStyle, spinnerStyle} from '../styles/styles'

const Home: NextPage = (props: any) => {
  useEffect(() => {
    props.fetchImage()
  },[])
  
  
  const [url, setUrl] = useState("");

  const [show, setShow] = useState(false);
  const [savedShow, setSavedShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (image:string) => {
    setUrl(image);
    setShow(true);
  }  
  const save = (image: string,e:any) => {
    
    e.stopPropagation()
    setSavedShow(!savedShow)
    props.saveImage(image)
  }
  return (
    <div> 
      <Head>
        <title>gallery</title>
      </Head>

      <h1 style={headerStyle}>DogGallery</h1>
      <div style={{textAlign: "center"}}><Button variant="info" style={{borderRadius: "100%", color:"white"}} onClick={()=>props.fetchImage()}><FontAwesomeIcon icon={faRedo} /></Button></div>
      <div style={containerStyle}>
        {props.loading?(<div style={spinnerStyle}><Spinner animation="border"/></div>):
        <>
        {props.images.map((image: string, index: number) => (
          <ImageFrame key={index} click={()=>handleShow(image)} url={image} delay={index/20}>
          <OverlayTrigger
            trigger='click'
            key={index}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${index}`}>
                Saved!
              </Tooltip>
            }
          >
            <Button variant="danger" onClick={(e)=>save(image,e)} style={buttonStyle}><FontAwesomeIcon icon={faHeart} /></Button>
          </OverlayTrigger>
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
const mapStateToProps = (state: { images: string[],loading:boolean}) =>{
  return {
      loading: state.loading,
      images: state.images
  }
}
const mapDispatchToProps: any = {
    saveImage: (image:String)=>saveImage(image),
    fetchImage
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
