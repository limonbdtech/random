import { useParams } from "react-router"
import {data} from "../Data"
import PropTypes from 'prop-types'
// import  Cover  from "../assets/cover.jpg";
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown,faThumbsUp,faComment,faShare,} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

// import { faThumbsUp,faComment,faShare,} from '@fortawesome/free-regular-svg-icons'
// import { faShare,faThumbsUp,faComment } from '@fortawesome/fontawesome-svg-core'
// import { faComment } from '@fortawesome/free-regular-svg-icons'


export default function Full(props) {
    
  let { Comment,Like,Share} = props

    let {userId} = useParams()
    let find = data.find(item => item.id === userId)
      

  
let [liked,setLikted] = useState(null) ;
let [like,setLike] = useState(Like)

let getLike = (i)=>{
  setLikted(true)
  setLike(like+i)
}
let removeLike = (i)=>{
  setLikted(null)
  setLike(like-i)
}

console.log(Like)
console.log(userId)
return (
  <div className="newsfeed">
  <div className="content_box" >
       <div className="content_header">
          <div className="content_header_logo">
              <div className="logo">
                <img src={find && find.ProfilePic} alt="logo" />
              </div>
              <div className="title" >
                      <h2 className="name">{ find && find.ProfileName}</h2>
                  <p className="time">11 December</p>
              </div>
          </div>
          <div><h2 className="action">...</h2></div>
       </div>
       <div className="main_content">
            <p className="content_text">
            { find &&find.Post}
            </p>

          <div className="content-image">
            <img src={find &&find.PostImage} alt="Post image" />
          </div>
       </div>
       <div className="content_footer">
          <div className="footer_up">
            <div className="count_like">{like < 0 && like+" like"} </div>
            <div className="comment-share">
            <div className="count_comment"> comment {Comment}</div>
            <div className="count_share">share {Share}</div>

            </div>
          </div>
          <div className="footer_middle">
        { liked ? <button onClick={()=>removeLike(1)}> <h1><FontAwesomeIcon icon={faThumbsDown}/></h1> </button>  : <button onClick={()=>getLike(1)}> <h1><FontAwesomeIcon icon={faThumbsUp}/></h1> </button>}    
           
            <button><h1><FontAwesomeIcon  icon={faComment}/></h1></button>
            <button><h1>{<FontAwesomeIcon icon={faShare}/>}</h1></button>
          </div>
       </div>
  </div>
  </div>
)
}


Full.propTypes = {
ProfileName:PropTypes.string.isRequired,
ProfilePic:PropTypes.string.isRequired,
Comment:PropTypes.string.isRequired,
Like:PropTypes.string.isRequired,
Post:PropTypes.string.isRequired,
PostImage:PropTypes.string.isRequired,
Share:PropTypes.string.isRequired,
Id:PropTypes.string.isRequired,
}


