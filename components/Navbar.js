import Link from "next/link";

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Note APP</a>
        </Link>
        <Link href='/new'>
            <a className="create">Criar Note</a>
        </Link>
    </nav>
)

export default Navbar;