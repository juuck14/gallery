import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { saveImage } from '../redux/images/actions'
import { connect, useStore } from 'react-redux';
import { useState } from 'react'
import styled from 'styled-components'
import { Modal, Button } from 'react-bootstrap'

interface ImageDetailInterface {
  url: string;
}
const ImageDetailStyle = styled.div<ImageDetailInterface>`
    background: ${(props:any) => `url(${props.url}) no-repeat top center`};
    background-size: cover;
    width: 100%;
    padding-bottom: 100%;
`;

const Detail = ({show, hide, url}: any) => {
  return (
      <Modal show={show} onHide={hide}>
        <Modal.Body><ImageDetailStyle url={url}></ImageDetailStyle></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default Detail;
