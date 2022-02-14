import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import Detail from '../components/detail'
import ImageFrame from '../components/imageFrame'
import { fetchCatImage, removeCatImage, saveCatImage } from '../redux/catImages/actions'
import { movePage } from '../redux/pageInfo/actions'
import { checkboxContainerStyle, checkboxStyle, containerStyle, headerStyle, spinnerStyle } from '../styles/styles'

const Cats: NextPage = (props: any) => {

  useEffect(() => {
    console.log('dsf')
    props.movePage(window.location.pathname,"CatGallery")
  },[])

  const [url, setUrl] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (image:string) => {
    setUrl(image);
    setShow(true);
  }  
  const [tag, setTag]: any = useState(-1);

  useEffect(() => {
      props.fetchCatImage(props.tags.length, tag);
  },[tag])
  return (
    <div> 
      <h1 style={headerStyle}>CatGallery</h1>
      <div style={{textAlign: "center"}}><Button variant="info" style={{borderRadius: "100%", color:"white"}} onClick={()=>props.fetchCatImage(props.tags.length, tag)}><FontAwesomeIcon icon={faRedo} /></Button></div>
      <div style={containerStyle}>
        {props.tags.length == 0?<></>:
        <div style={checkboxContainerStyle}> 
          <Form.Check type="radio" id="all" label="all" name="tag" style={checkboxStyle} onChange={() => setTag(-1)} checked={tag < 0}/>
          {props.tags.map(({id, name}: any, index: number) => (
            <Form.Check type="radio" id={name} label={name} key={index} name="tag" value={id} style={checkboxStyle} onChange={() => setTag(id)}/>
          ))}
        </div> 
        }
        {props.loading?(<div style={spinnerStyle}><Spinner animation="border"/></div>):
        <>

        {props.images.map(({url}: any, index: number) => (
          <ImageFrame key={url} click={()=>handleShow(url)} url={url} delay={index/20} save={()=>props.saveCatImage(url)} remove={()=>props.removeCatImage(url)} type="cat" comment={props.comments[url]?props.comments[url].length:0}>
          </ImageFrame>
          
        ))}

        </>
        }
      </div>
      
      <Detail show={show} hide={handleClose} url={url} type="cat">
      </Detail>
    </div>
  )
}
const mapStateToProps = ({dog, cat}: any) =>{
  return {
      loading: cat.loading,
      images: cat.images,
      comments: cat.comments,
      tags: cat.tags
  }
}
const mapDispatchToProps: any = {
    saveCatImage: (image:string)=>saveCatImage(image),
    removeCatImage: (image:string)=>removeCatImage(image),
    fetchCatImage: (length:number, tag:number)=>fetchCatImage(length, tag),
    movePage: (currentPage:string, title:string)=>movePage(currentPage, title)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cats)
