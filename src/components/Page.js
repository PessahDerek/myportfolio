import React from 'react'
import '../styles/Comp.css'

const Page = ({children, id}) => {
  return (
    <div className='page' id={id} data-aos="zoom-out">
        <div className='container'>
            { children }
        </div>
    </div>
  )
}

export default Page