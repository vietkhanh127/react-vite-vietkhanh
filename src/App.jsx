import './components/todo/todo.css'
import logoReact from './assets/react.svg'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'


const App = () => {



  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
