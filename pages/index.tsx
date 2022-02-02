import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { saveImage } from '../redux/images/actions'
import { connect } from 'react-redux';

const Home: NextPage = (props: any) => {
  const images: Array<String> = ['image1','image2','image3','image4','image5','image6']
  return (
    <div>
      <Head>
        <title>gallery</title>
      </Head>      
      <h2>hello world</h2>
      <div>
        {images.map((image) => (
          <div>
            {image}<button type='button' onClick={()=>props.saveImage()}>저장</button>
          </div>
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = (state: { count: any }) =>{
  return {
      count: state.count
  }
}
const mapDispatchToProps = (dispatch: Function) =>{
  return {
    saveImage: ()=>dispatch(saveImage())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
