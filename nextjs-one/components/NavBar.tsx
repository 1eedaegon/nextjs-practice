import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar: NextPage = () => {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      <Link href="/">
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 20px 0 10px 0;
          box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -200px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
};
export default NavBar;
