import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Bookstore from './Bookstore'



function App() {
  const actors=['sakib','dev','jit','manna','salman shah'];

  const singers=[
  {name:"balam", age:38},
  {name:"Palak", age:33},
  {name:"Sabina", age:34}

  ]

const books=[
{bookName:"Himu",price:120,writer:"motherfucker"},
{bookName:"Bancali",price:140,writer:"bastard"},
{bookName:"RoktoDan",price:200,writer:"cudanirpuya"},

]
  return (
    <>
      {/* these are called component, similar look but different in data */}
      <h3>Vite + React</h3>
<Bookstore books={books}></Bookstore>

{/* {
  Books.map(book =><Bookstore bookName={book}></Bookstore>)
} */}


  <Actor names={"Bappi da"}></Actor>
  {
    actors.map(actor=><Actor names={actor}></Actor>)
  }

  {
    singers.map(singer=><Singer singer={singer}></Singer>)
  }

   
      {/* <Todo
        task="Learn-React"
        isDone={true}>

      </Todo>
      <Todo
        task="Explore Core Concept"
        isDone={false}>

      </Todo>
      <Todo
        task="Try JSX"
        isDone={true}>

      </Todo> */}
      <Person></Person>
      <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="sunglass" price="5"></Device>
      <Student grade="9" score="98"></Student>
      <Student grade={8} score="99"></Student>
      <Student grade="9" score="98"></Student>
      <Developer></Developer>

    </>
  )
}

function Person() {
  const age = 25;
  const money = 125;
  const person = { name: 'rakib', age: 12 }
  return <h3>I am {person.name} with {age + money}</h3>
}


const { grade, score } = { grade: '9', score: '98' }
// function Student(props)
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score)
  return (
    <div className='student'>
      <h3>Student Details</h3>
      <p>Student Class:{grade} </p>
      <p>Student score:{score}</p>
    </div>

  )
}



function Developer() {
  const developerStyle = {
    margin: '24px',
    padding: '24px',
    border: '2px solid purple',
    borderRadius: '20px'
  }

  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding:</p>
    </div>
  )

}
// Props stands for Properties of object
// !Important: props receive value as object !!!!!
function Device(props) {
  // console.log(props)
  return <h2>This Device : {props.name} price :{props.price}</h2>
}

export default App
