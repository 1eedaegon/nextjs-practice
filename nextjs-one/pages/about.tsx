import { NextPage } from 'next';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';

const About: NextPage = () => {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
    </div>
  );
};
export default About;
