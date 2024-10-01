export default function Main(props) {
  const { data } = props;
  const extractVideoID = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
  };

  return (
    <div className="imgContainer">
      {data.hdurl ? (
        <img src={data?.hdurl} alt={data?.title} className="bgImage" />
      ) : (
        <iframe
          style={{
            width: "100%",
            height: "100vh", 
            objectFit: "cover",
            borderRadius: "0.5rem",
            transform: "scale(1)",
            transition: "transform 0.3s",
            pointerEvents: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          src={`https://www.youtube.com/embed/${extractVideoID(
            data.url
          )}?autoplay=1&loop=1&mute=1&playlist=${extractVideoID(
            data.url
          )}&controls=0&modestbranding=1&showinfo=0&fs=0&disablekb=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; loop; muted; fullscreen"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
