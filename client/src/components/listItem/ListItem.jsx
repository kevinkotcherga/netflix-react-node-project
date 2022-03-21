import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './listitem.scss'
import { Link } from 'react-router-dom'

const ListItem = ({index, item}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzMwN2E4OTgxN2E3MjE1ZDllZGUzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzg1OTA2NiwiZXhwIjoxNjQ4MjkxMDY2fQ.UNsz7alHLNbf1l93Z9WXheopqqVY20vdcA2AIHvkzU0'
          },
        });
        setMovie(res.data)
      }catch(err){
        console.log(err)
      }
    };
    getMovie()
  }, [item]);

  return (
    <Link to={{pathname:'/watch', movie:movie}} >
      <div
          className="list-item"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        <img
          src={movie.img}
          alt=""
        />
        {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="item-info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className='limit'>{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
        )}
      </div>
    </Link>
  )
}

export default ListItem
