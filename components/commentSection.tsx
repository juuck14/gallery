import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { commentCatImage } from '../redux/catImages/actions';
import { commentDogImage } from '../redux/dogImages/actions';
import { commentsStyle, commentStyle, commentNameStyle, commentDatetimeStyle } from '../styles/styles';

const CommentSection = (props: any) => {
  let thisComments: any = []
  const scrollRef = useRef<HTMLDivElement>(null);
  if(props.type === "dog"){
    thisComments = props.dogComments[props.url]
  } else if(props.type === "cat"){
    thisComments = props.catComments[props.url]
  }  
  const submit = async () =>{
    if(comment.trim().length > 0){
      var p = new Promise(function(resolve, reject) {
        if(props.type === "dog"){
          props.commentDogImage(props.url, comment);
        } else if(props.type === "cat"){
          props.commentCatImage(props.url, comment);
        }  
        resolve("success");
      });
  
      p.then(function() {
        console.log(scrollRef);
        if(scrollRef.current){
          console.log(scrollRef.current,scrollRef.current.children[scrollRef.current.children.length - 1])
          scrollRef.current.children[scrollRef.current.children.length - 1].scrollIntoView();
          setComment("")
        }
      });
    }
  }
  const formatDatetime = (dtm: Date): String => {
    const year = dtm.getFullYear()
    const month = dtm.getMonth() + 1 >= 10? dtm.getMonth() + 1: "0" + (dtm.getMonth() + 1)
    const date = dtm.getDate() >= 10? dtm.getDate() : "0" + dtm.getDate()
    const hours = dtm.getHours() >= 10? dtm.getHours() : "0" + dtm.getHours()
    const minutes = dtm.getMinutes() >= 10? dtm.getMinutes() : "0" + dtm.getMinutes()
    return "" + year + "/" + month + "/" + date + " " + hours + ":" + minutes
  }
  const [comment, setComment] = useState("")
  return (
    <div>
        {thisComments?
        <div style={commentsStyle} ref={scrollRef}>
          {thisComments.map(({content, name, datetime}: any, index: number) => (
            <div key={index} style={commentStyle} className={"comment"+index}>
              <div style={commentNameStyle}>{name}</div>
              <div>{content}</div>
              <div style={commentDatetimeStyle}>{formatDatetime(datetime)}</div>
            </div>
          ))}
        </div>:<></>}

        <Form.Group className="mb-3" style={{marginTop:"20px"}}>
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" rows={3} value={comment}
          onChange={(e) => setComment(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={()=>submit()} disabled={comment.trim().length == 0}>
          Submit
        </Button>
        
    
    </div>
  )
}

const mapStateToProps = ({dog, cat}: any, ownProps: any) =>{
  return {
      ...ownProps,
      dogComments: dog.comments,
      catComments: cat.comments

  }
}

const mapDispatchToProps: any = {
  commentDogImage: (url:string, comment:string)=>commentDogImage(url, comment),
  commentCatImage: (url:string, comment:string)=>commentCatImage(url, comment)
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentSection);
