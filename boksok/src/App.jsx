import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Searchresults from './components/Searchresults'

function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState()
  const [currentId, setCurrentId] = useState()

  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query})`) /*james+bond eller ${query}   kan bruke dette i stedet for å søke dynamisk */
      const data = await response.json()
      setContent(data)
      console.log(content)
    }catch{
      console.error("Fikk ikke hentet data.")
    }
  }

  useEffect(()=>{
    getData()
    setCurrentId(localStorage.getItem("key"))
  },[query])

  console.log("ID", currentId)

  return (
    <Layout>
      <Routes>
        <Route index element={<Searchresults content={content}/>}/>
      </Routes>
    </Layout>
  )
}

export default App
