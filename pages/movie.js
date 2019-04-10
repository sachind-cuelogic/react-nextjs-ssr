import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../components/mainLayout';
import withReduxSaga from '../withReduxSaga';
import MovieDetail from '../components/movieDetail';
import configureStore from '../store';

function Movie(props) {
  console.log("moviewww==>>>", props)
  return (
    <MainLayout>
      <h1>
        Movie
      </h1>
      <MovieDetail {...props} />
    </MainLayout>
  );
}

Movie.propTypes = {
  url: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { url } = ownProps;
  const id = url.query.id;
  console.log("movie state.entities==>>>", state.entities)
  const movie = state.entities.movies[id] || {};
  return {
    movie,
  };
}

export default withReduxSaga(configureStore, mapStateToProps)(Movie, {
  server: { type: 'GET_MOVIE_SERVER' },
  client: { type: 'GET_MOVIE' },
});
