import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useResume from '../Hooks/useResume';

const DropDownBtn = ({path}) => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const {href} = window.location
    const { downloadCv } = useResume()

    const gotoPath = () =>{
      if(path.path === "resume"){
        return downloadCv()
      }
      if(path.path === ""){
        let element = document.getElementById("introduction");
        if(element) element.scrollIntoView({behavior: "smooth"})
        // window.history.pushState(null, null, `${path.path}`);
        navigate(path.path)
        return
      }
      if(path.path.includes("#")){
        if(pathname !== "/")navigate("/") // scroll to homepage first
        let element = document.getElementById(path.path.slice(1))
        if(element){
            element.scrollIntoView({behavior: "smooth"})
          }
        window.history.pushState(null, null, `${path.path}`);
        return
      }
      navigate(path.path)
    }

    useEffect(()=>{
      if(href.includes("#")){
        let element = document.getElementById(href.split("#")[1])
        if(element){
          if(!href.includes(path.path))element.scrollIntoView({behavior: "smooth"})
        } 
      }
    }, [pathname, href, path.path])

    let className = window.innerWidth >= 600 ? "pc-dropdown" : "mobile-dropdown-btn"
  return (
    <div className={className}   >
        <button onClick={gotoPath} onTouchEnd={gotoPath}  >
            {path.txt}
        </button>
    </div>
  )
}

export default DropDownBtn