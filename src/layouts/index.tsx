import React,{useEffect,useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Login from '@/components/login'
import {L2Dwidget} from 'live2d-widget'
import Bg from '../components/background'
export default function Index(props:any) { 
   
    useEffect(()=>{
        L2Dwidget.on('*', (name:any) => {  
        }).
        init({
        "model": {
            // jsonPath: "https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json",
            jsonPath: "https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json",
            // jsonPath: "https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",
            // jsonPath: "https://unpkg.com/live2d-widget-model-izumi@1.0.5/assets/izumi.model.json",
            // jsonPath: "https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json",
            // jsonPath: "https://unpkg.com/live2d-widget-model-tsumiki@1.0.5/assets/tsumiki.model.json",
            // jsonPath: "https://unpkg.com/live2d-widget-model-unitychan@1.0.5/assets/unitychan.model.json",
            "scale":1
        },
        dialog: {
            // 开启对话框
            enable: true,
            script: {
              'hover #live2dcanvas': '星星在天上而你在我心里 (*/ω＼*)',
              'tap body': '哎呀！别碰我！',
              'tap face': '人家已经不是小孩子了！'
            }
          },
        "display": {
            "position": "left",
            "width": 150,
            "height": 200,
            "hOffset": 20,
            "vOffset": 10
        },
        "mobile": {
            "show": true,
            "scale": 1
        },
        "react": {
            "opacityDefault": 0.5,
            "opacityOnHover": 1,
        }
   })
    },[])
    if (props.location.pathname === '/login') {
        return <>
           <Bg></Bg>
            <Login {...props}></Login>
            </>
      }
    if(props.location.pathname.includes('/edit') ){
        return  <>{props.children}</>
    }
    return (
        <div>
           <Bg></Bg>
           <Header/>
           <div className="body-content" >
           {props.children}
           </div>
           {/* <Footer>

           </Footer> */}
           <div className="mobile-content">
               <div className="msg-box">
                   mobile 页面博主不想写拉
                   等有时间再写吧，所以打开你的
                   电脑来看看吧。。。
               </div>
           </div>
            {/* {props.children} */}
        </div>
    )
}
