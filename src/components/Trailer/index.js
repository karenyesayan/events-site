const Trailer = ({src}) => {

  return (
    <iframe
      width="100%"
      height="900"
      src={`https://youtube.com/embed/${src}?autoplay=1&&mute=1&playlist=${src}&loop=1&showinfo=0&controls=1`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
}

export default Trailer


