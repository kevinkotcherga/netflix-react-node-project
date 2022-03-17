import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import { useEffect, useState } from 'react';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {

      }catch(err){
        console.log(err)
      }
    }
  })
  return (
    <div className='home'>
      <Navbar />
      <Featured type={ type }/>
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
