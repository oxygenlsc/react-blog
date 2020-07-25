import React from 'react'
import './common.less'
export default function LinkItem(props) {
    return (
        <div className='link-item-box' style={{width:'200px',height:props.height,backgroundColor:props.bgC}}>
            <div className="link-title">
                <img src={props.itemMsg.img} alt=""/>
                <a href={props.itemMsg.link} target='black'>{props.itemMsg.name}</a>
            </div>
            <div className="link-des">
            {props.itemMsg.des}
            </div>
        </div>
    )
}
