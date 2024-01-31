import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [moviedetail, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(moviedetail);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div
      className={styles.yeah}
      style={
        {
          // backgroundImage: `url(${moviedetail.background_image})`,
        }
      }
    >
      <div>
        {/* <h1 className={styles.title}>{moviedetail.title}</h1>
        <img
          className={styles.cover_image}
          alt={moviedetail.title}
          src={moviedetail.large_cover_image}
        ></img> */}
      </div>
    </div>
  );
}

export default Detail;
