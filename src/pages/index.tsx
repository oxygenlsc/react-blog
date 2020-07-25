import React from 'react';
import './index.less';
import ItemBox from '@/containers/articItemBox'
import MySelfBord from '@/containers/myselfBord'
export default function index() {
  return (
    <div className='index-first-page'  onScroll={()=>{
      console.log(123)
  }}>
    <header className='header'>
        <ItemBox></ItemBox>
        <MySelfBord></MySelfBord>
    </header>
    </div>
  );   
}
