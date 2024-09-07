import { useParams, Navigate } from "react-router-dom";
import { useSongs } from "../context/SongsContext";

const SongDetails = () => {
  const { id } = useParams();
  const { songs, loading, error } = useSongs();
  const songId = Number(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const song = songs.find((song) => song.id === songId);

  if (!song) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <h1>{song.title}</h1>
      <h2>By {song.artist}</h2>
      <p>{song.lyrics}</p>
    </div>
  );
};

export default SongDetails;
