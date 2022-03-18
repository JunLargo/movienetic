import Link from 'next/link';


export const getStaticPaths = async () => {
  const res = await fetch(`https://imdb-api.com/en/API/Top250Movies/${process.env.IMDB_API_KEY}`);
  const data = await res.json();

  const paths = data.items.map(ninja => {
      return {
          params: {id: ninja.id.toString()}
      }
  })

  return {
      paths,
      fallback: false
  }

}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://imdb-api.com/en/API/Trailer/${process.env.IMDB_API_KEY}/${id}`);
  const data = await res.json();

  return {
      props: { movie: data }
  }

}


const Details = ({movie}) => {
  //console.log({movie})
  return (
    <div className="container">
      <div className="movie-single">
        <div className="movie-single-title">
          <h4>{movie.title}</h4>
          <p>{movie.year}</p>
          <p>{movie.videoTitle}</p>
        </div>
        <Link href="/">
          <a>Back to Homepage</a>
        </Link>
      </div>
    </div>
  );
}
 
export default Details;