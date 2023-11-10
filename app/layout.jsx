export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <title>Next Reviews</title>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    Footer Here...
                </footer>
            </body>
        </html>
    )
}