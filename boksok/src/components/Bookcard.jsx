import { Link } from "react-router-dom";

export default function Bookcard({ Key, Title, Year, Author, Rating, Cover, Amazon }) {


    console.log("amazon", Amazon);

    return (
        <>
            <article className="book" key={Key}>
                <ul>
                    <li>Title: {Title}</li>
                    <li>Publishing year: {Year}</li>
                    <li>Author: {Author}</li>
                    <li>Rating: {Rating}</li>
                    <img src={`https://covers.openlibrary.org/b/id/${Cover}-L.jpg`} alt="Book cover" />
                    {Amazon && (
                        <Link to={`https://www.amazon.com/s?k=${Amazon}`}>Buy on Amazon</Link>
                    )}
                </ul>
            </article>
        </>
    );
}