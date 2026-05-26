import { useState } from 'react'
import "./followBtn.css"

function FollowBtn({id}){
    
    const [follows, setFollows] = useState(JSON.parse(localStorage.getItem("follows")) || [] )

    
    const followCat = () =>{
        
        localStorage.setItem("follows", JSON.stringify([...follows, id]))
        setFollows([...follows, id])
    }

    const unfollowCat = ()=>{
        setFollows(follows.filter(item => item !== id))
        localStorage.setItem("follows", JSON.stringify(follows.filter(item => item !== id)))
    }
  
    return(
        <>
            {
                follows.includes(id) 
                ? <button onClick={unfollowCat}>Following</button>
                : <button onClick={followCat}>Follow</button>
            }
        </>
    )
}

export default FollowBtn
