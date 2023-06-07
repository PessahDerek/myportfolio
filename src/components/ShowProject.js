import React from 'react'
import '../styles/Comp.css'
import { BsBrowserChrome } from 'react-icons/bs'
import { RiGithubFill } from 'react-icons/ri'

const ShowProject = ({project: {title, link, types, github, stack, image}}) => {

    const Link = ({link, icon}) => <a href={link} target='_blank' >
        {icon}
        {/\bgithub\b/g.test(link) ? "Github" : "Visit"
    }</a>

  return (
    <div className='show-project'>
        <img src={image}  alt={title} />
        <div className='details'>
            <h3>{title}</h3>
            <div className='title'>
                <div className='line' />
                <span>
                    {types.reduce((acc, curr)=>acc + ", " + curr)}
                </span>
                <div className='line' />
            </div>
            <span>
                {stack.reduce((acc, curr)=> acc + ", " + curr)}
            </span>
            <span>
                <Link link={link} icon={<BsBrowserChrome />} />
                {github === null ? <div className='err' >code owned</div> : <Link icon={<RiGithubFill />} link={github} />}
            </span>
        </div>
    </div>
  )
}

export default ShowProject