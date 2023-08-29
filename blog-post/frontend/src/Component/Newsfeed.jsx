import News from "./News";
import {data} from "../Data"



export default function Newsfeed() {
  console.log(data)
  return (
    <div className="newsfeed">
      {data && data.map((item,index)=> {
        return(
          <News key={index} ProfileName={item.ProfileName} ProfilePic={item.ProfilePic} Comment={item.Comment} Like={item.Like} Post={item.Post} PostImage={item.PostImage}
           Share={item.Share} Id={item.id} />
        )
      })}
      
  
    
    </div>
  )
}
