import { Button, Modal } from 'react-bootstrap'
import styled from 'styled-components'

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
