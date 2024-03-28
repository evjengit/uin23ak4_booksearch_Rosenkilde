import { useState } from "react"
import { Link } from "react-router-dom"
export default function SearchField({content, setQuery, setCurrentId}){
    const [search, setSearch] = useState("")
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    const handleClick = (id)=>{
        setCurrentId(id)
        localStorage.setItem("key", id)
    }

    return(
    <>
        <h1>Søk etter bok</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="search">Søk etter bok:</label>
        <input type="text" id="search" placeholder="James Bond..." onChange={handleChange}></input>
        <input type="submit" value="Søk"></input>
        </form>
        <ul className="book-list">
            {content?.map(item => <li key={item.key}><Link to={item.title} onClick={()=>handleClick(item.id)}>{item.name}</Link></li>)}
        </ul>
    </>
    )

}