export default function Bookcard(){
    return(
        <section>
            <ul>
                <li>title</li>
                <li>year</li>
                <li>author</li>
                <li>average rating</li>
                <li><Link to={Json.stringify(amazon_id)}>Buy book</Link></li>
            </ul> 
        </section>
    )
}