import { combineReducers } from 'redux';
import repo from './repo';
import movies from './movies';
import entities from './entities';
import properties from "./properties"
export default combineReducers({
  repo,
  movies,
  entities,
  properties,
});
