import React from 'react'
import Home from '../home/homes/Home'
import Branding from '../home/Branding'
import Importance from '../home/Importance/Importance'
import Knowledge from '../home/knowledge/Knowledge'
import Wrapper from '../home/Wrapper'
import Statistics from '../home/Statistics'
import WrapperOne from '../home/WrapperOne'
import Friends from '../home/friends/Friends'
import Blog from '../home/blog/Blog'
import Footer from '../home/Footer'


const HomePages = () => {
  return (
    <>
      <Home/>
      <Branding/>
      <Importance/>
      <Knowledge/>
      <Wrapper/>
      <Statistics/>
      <WrapperOne/>
      <Friends/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default HomePages