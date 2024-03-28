export default function Layout({children}){

    return(
        <>
        <header>
            <h1>Nav bar</h1>
            <nav>
                <ul>
                    <li>meny punkt</li>
                    <li>meny punkt</li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>Footer</footer>
        </>
    )

}