import { Link } from "react-router-dom"
import SearchField from "./Searchfield"
export default function Layout({children, query, setQuery}){

    return(
        <>
        <header>
            <h1>Bibliotek</h1>
            <section className="searchField">
                <SearchField content={query} setQuery={setQuery}></SearchField>
            </section>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>&#169; All rights reserved Ole Jakob Rosenkilde</p>
            <p>4/5/2024</p>
        </footer>
        </>
    )

}