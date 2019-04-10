const routes = require('next-routes')();

module.exports = routes;

routes.add('movie', '/movies/:id', 'movie');
routes.add('properties', '/property/:id', 'properties');

