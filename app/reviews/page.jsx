import Link from "next/link";

export default function ReviewsPage() {
    return (
        <>
            <div>
                <h1>Reviews</h1>
                <ul>
                    <li>
                        <Link href="/reviews/hollow-knights">Hollow Knights</Link>
                    </li>
                    <li>
                        <Link href="/reviews/stardew-velly">Stardew Valley</Link>
                    </li>
                </ul>
                <p>
                    Here will be all reviews
                </p>
            </div>
        </>

    )
}