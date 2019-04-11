import React from 'react';
import PropTypes from 'prop-types';

function MovieDetail({ movie }) {
  const imdb = `http://www.imdb.com/title/${movie.imdb_id}/`;
  return (
    <div>
      <h2>
        <a href={movie.homepage}>{movie.title}</a>
      </h2>
      <p>{movie.overview}</p>
      <p>imdb: <a href={imdb}>{imdb}</a></p>
    </div>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    listing_group: PropTypes.string,
    square_feet: PropTypes.string,
    cap_rate: PropTypes.string,
    description: PropTypes.string,
  }),
};

MovieDetail.defaultProps = {
  movie: {},
};

export default MovieDetail;
