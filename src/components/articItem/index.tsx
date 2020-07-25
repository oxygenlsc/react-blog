import React,{useEffect,useState}from 'react'
import {CalendarTwoTone,TagTwoTone,FireTwoTone,LikeTwoTone} from '@ant-design/icons'
import './index.less'
import {itemProps} from '@/utils/tsConfig/interface'
export default function Index(props?:itemProps) {
    return (
            <div className='item-wrapper' id='itemDom'>
                <div className="title">{props.artic.title}</div>
                <div className="des">
                    <div className="time"><CalendarTwoTone twoToneColor='#eb2f96' />:{props.artic.time}</div>
                    <div className="tag"><TagTwoTone twoToneColor='#52c41a' />:{props.artic.tag}</div>
                    <div className="hot"><FireTwoTone  twoToneColor='#f80'/> :{props.artic.view} </div>
                    <div className="goof"><LikeTwoTone />:{props.artic.good}</div>
                </div>
                <div className="artic-content">
                    {props.artic.content}
                </div>
            </div>
    )
}
