import { useState } from 'react'
import "./followBtn.css"

function FollowBtn({id}){
    
    const [follows, setFollows] = useState(JSON.parse(localStorage.getItem("follows")) || [] )

    
    const followCat = () =>{
        const currentFollows=JSON.parse(localStorage.getItem("follows")) || []
        localStorage.setItem("follows", JSON.stringify([...currentFollows, id]))
        setFollows([...currentFollows, id])
        
    }

    const unfollowCat = ()=>{
        const currentFollows=JSON.parse(localStorage.getItem("follows")) || []
        setFollows(currentFollows.filter(item => item !== id))
        localStorage.setItem("follows", JSON.stringify(currentFollows.filter(item => item !== id)))
        
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
