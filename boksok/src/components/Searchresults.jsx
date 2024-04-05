import Bookcard from "./Bookcard";

export default function Searchresults({content}){

    const books = content?.docs;

    return(
        <>
            <section className="flex-books">
            {books?.map(book => {
                const validAmazonId = Array.isArray(book.isbn) ? book.isbn.filter(Boolean) : [];
                const AmazonId = validAmazonId.length > 0 ? validAmazonId[0] : null;
                
                return(
                        <Bookcard 
                        className="book" 
                        key={book._version_} 
                        Title={book.title} 
                        Year={book.first_publish_year} 
                        Author={book.author_name} 
                        Rating={book.ratings_average} 
                        Cover={book.cover_i} 
                        Amazon={AmazonId}>
                        </Bookcard>
                );
            })}
            </section>
        </>
    );
}