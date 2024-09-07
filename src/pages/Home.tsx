import { Link } from "react-router-dom";
import { useSongs } from "../context/SongsContext";

const Home = () => {
  const { songs, loading, error } = useSongs();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <Link to={`/song/${song.id}`}>
              {song.title} - {song.artist}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
