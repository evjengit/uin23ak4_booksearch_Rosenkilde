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
        localStorage.setItem("_version_", id)
    }

    return(
    <>
        <h2>Søk etter bok</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" id="search" placeholder="James Bond..." onChange={handleChange}></input>
            <input className="button" type="submit" value="Søk"></input>
        </form>
        <ul className="book-list">
            {content?.map(item => <li key={item._version_}><Link to={item.title} onClick={()=>handleClick(item._version_)}>{item.title}</Link></li>)}
        </ul>
    </>
    )

}