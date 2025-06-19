import React from 'react'
import Child from './components/Child'
import { Home } from './pages/Home'
import './App.css'
import Counter from './assets/Counter'

const App = () => {
  // var fruits = ["Apple","Banana","Orange"];
  return (
    <div>
      {/* <Child name="viky" phone="98321" dep="IT"/>
      <Child name="viky" phone="98321" dep="IT"/>
      <Home items={fruits}/> */}
      <Counter/>
    </div>
  )
}

export default App