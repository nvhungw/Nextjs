import Link from "next/link"

const Navbar = () => {
    return(
        <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/login">Login</Link></li>
        </ul>
    )
}

export default Navbar