const routes = require('next-routes')();

module.exports = routes;

routes.add('movie', '/movies/:id', 'movie');
routes.add('properties', 'properties');
routes.add('property', '/property/:id', 'property');

