import React from 'react'
import '../index.less'
export default function ImgBox(props) {
    return (
        <div className='head-img-box'>
            <img src={props.src} alt=""/>
        </div>
    )
}
