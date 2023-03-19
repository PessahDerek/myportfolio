import React from 'react'
import useIsPc from '../hooks/useIsPc'
import './comp.css'

const Funny = ({pos}) => {
    const isPc = useIsPc()
    if(isPc)return (
    <div className='funny' style={{
        transform:  `translate(${pos.x}px, ${pos.y}px)`}} ></div>
  )
}

export default Funny