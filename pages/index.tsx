import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return <div className={`${inter.className}`}>본문입니다!</div>;
};

export default Home;
