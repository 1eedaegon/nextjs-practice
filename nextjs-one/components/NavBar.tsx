import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar: NextPage = () => {
    const router = useRouter();
    console.log(router);
    return (
    <nav>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
    </nav>
    )
}
export default NavBar