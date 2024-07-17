import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from './Header/MainHeader.js'

const LayOut = () => {
  return (<>
  <MainHeader/>
  <Outlet/>
  </>)
}

export default LayOut