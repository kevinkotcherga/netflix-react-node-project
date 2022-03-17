import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import { useEffect, useState } from 'react';

import axios from 'axios'

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get('/lists', {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzMwN2E4OTgxN2E3MjE1ZDllZGUzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzUyNzI2OCwiZXhwIjoxNjQ3OTU5MjY4fQ.8Va7qOViuD60yM2zHWPsOewQvkseaY01CYiWiBv7kWo'
          }
        });
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
     // Quand 'type' ou 'genre' sera appelé alors seulement à ce moment
     // la fonction dans useEffect ce lancera
  }, [ type, genre]);

  return (
    <div className='home'>
      <Navbar />
      <Featured type={ type }/>
      {lists.map((list) => (
        <List list={ list }/>
      ))}
    </div>
  );
};

export default Home;
