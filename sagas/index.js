import { all, fork } from 'redux-saga/effects';
import watchFetchRepo from './repoSagas';
import { watchFetchMovies, watchFetchMovie, fetchMovieServer } from './movieSagas';
import { fetchPropertyData,  fetchPropertyServer} from './propertySagas';

function* serverSagas() {
  yield all([fork(fetchMovieServer), fork(fetchPropertyServer)]);
}

function* clientSagas() {
  yield all([fork(watchFetchRepo), fork(watchFetchMovies), fork(watchFetchMovie), fork(fetchPropertyData)]);
}

export default function* mainSaga() {
  yield all([fork(serverSagas), fork(clientSagas)]);
}
