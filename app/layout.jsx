export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <title>Next Reviews</title>
                    <header>[header]</header>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    [footer]
                </footer>
            </body>
        </html>
    )
}