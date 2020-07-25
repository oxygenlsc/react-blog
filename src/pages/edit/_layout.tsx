import React from 'react'
import './index.less'
import BackLayout from '@/components/backgroundComp/BackLayout'
export default function _layout(props) {
    return (
    <BackLayout>{props.children}</BackLayout>
    )
}
