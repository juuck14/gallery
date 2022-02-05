import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { saveImage } from '../redux/images/actions'
import { connect, useStore } from 'react-redux';
import { useState } from 'react'
import styled from 'styled-components'
import { Modal, Button } from 'react-bootstrap'

const Detail = ({show, hide, title}: any) => {
  return (
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default Detail;
