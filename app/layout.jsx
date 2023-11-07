export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <header>
                <title>Next Reviews</title>
            </header>
            <body>
                {children}
            </body>
            <footer>
                Footer Here...
            </footer>
        </html>
    )
}