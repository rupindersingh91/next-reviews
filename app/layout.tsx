import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
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