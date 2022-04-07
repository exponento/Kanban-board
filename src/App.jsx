import React from "react";
import Heder from './home/heder/Heder';
import Footer from './home/footer/Footer';
import Main from './home/main/Main';
import './app.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./comments/Comments";

function App() {
  const newState = [
    {
      title: '',
      id: '',
      name: '',
      description: ''
    }
  ]
  if (localStorage.getItem('data')){
  } else{localStorage.setItem('data', JSON.stringify(newState))}

const parsingStorage = JSON.parse(localStorage.getItem('data'))
const [data, setData] = useState(parsingStorage);
localStorage.setItem('data',JSON.stringify(data));


function createData(name){
    const newItem = {
        title: 'Backlog',
        id: `${Math.random()}`,
        name: name,
        description: 'This task has no description'
    }
    if (name !== undefined && data !== null){
        setData([...data, newItem])
    } if (name !== undefined && data === null){
        setData([newItem])
    }
};

function changeState (name, title){
    const arrIndex = data.map(e => {return(e.name)})
    const position = arrIndex.indexOf(name)
    const arr = []
    for(let i = 0; i < data.length; i++){
        if (i !== position){
            arr.push(
                {
                    title: data[i].title,
                    id: data[i].id,
                    name: data[i].name,
                    description: data[i].description
                }
            )
        } 
    }
    for (let i = 0; i < data.length; i++){
        if (i === position){
            arr.push(
                {
                    title: title,
                    id: data[i].id,
                    name: data[i].name,
                    description: data[i].description
                }
            )
        }
    }
    setData(arr)
};

function changeDescription (name, text){
  const newDescription = data.map(e => {
    if (e.name !== name){
      return(
        {
          title: e.title,
          id: e.id,
          name: e.name,
          description: e.description
        }
      )
    }
      else{
        return(
          {
            title: e.title,
            id: e.id,
            name: e.name,
            description: text
          }
        )
      }
  })
  setData(newDescription)
}

    let countActiv = 0
    let countFinish = 0

const routePath = data.map(e => {return(
  <Route key = {e.id} path={`/comments/${e.id}`}  element={<Comments name = {e.name} description = {e.description} changeDescription = {changeDescription} />} />
)})

    for (let i = 0; i < data.length; i++){
        if (data[i].title === 'Backlog'){
            countActiv = countActiv + 1
        } else if (data[i].title ==='Finished'){
            countFinish = countFinish + 1
        }
    }
  return (
    <BrowserRouter>
      <div className="home">
        <Heder />
        <Routes>
          <Route path='/' element={
            <Main data = {data}
              createData = {createData}
              changeState = {changeState}
            />} 
          />
          {routePath}
        </Routes>
        <Footer activ = {countActiv} finished = {countFinish}/>
      </div>
    </BrowserRouter>
  )
}

export default App
 