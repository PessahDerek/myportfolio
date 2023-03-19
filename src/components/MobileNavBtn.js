import React from 'react'
import { useNavigate } from 'react-router-dom'
import useDownload from '../hooks/useDownload'

const MobileNavBtn = ({text, path, show}) => {
    const navigate = useNavigate()
    const download = useDownload()

    const action = () => {
        if(text === "download cv"){
            download()
            return
        }
        navigate(path)
        show(false)  
    }

  return (
    <button style={style} onClick={action}>
        {text}
    </button>
  )
}

const style = {
    width: "100%",
    height: "100%",
    backgroundColor: '#F7F7F7'
}
export default MobileNavBtn