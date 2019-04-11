import React from 'react';
import PropTypes from 'prop-types';

function MovieDetail({ movie }) {
  const imdb = `http://www.imdb.com/title/${movie.imdb_id}/`;
  console.log("movie ===>>", movie)
  return (
    <div>
      {/* <h2>
        <a href={movie.homepage}>{movie.title}</a>
      </h2>
      <p>{movie.overview}</p>
      <p>imdb: <a href={imdb}>{imdb}</a></p> */}
      <div role="tabpanel" class="tab-pane active" id="propertyDetails">
        <div class="title text-left">
          <h3>{movie.title ? movie.title : ""}</h3>
        </div>
        <table class="table table-border-none">
          <tbody>
            <tr>
              <td>Listing Price</td>
              <td class="font-lg">
                <span>{movie.price ? movie.price : ""}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="title-border">
          <h4>PROPERTY INFORMATION</h4>
        </div>
        <table class="table table-border-none">
          <tbody>
            <tr>
              <td>Property Type</td>
              <td>{movie.listing_group ? movie.listing_group : ""}</td>
            </tr>
          </tbody>
        </table>
        <div class="title-border">
          <h4>DETAILS</h4>
        </div>
        <table class="table table-border-none">
          <tbody>
            <tr>
              <td>Building Square Feet</td>
              <td>
                <span>{movie.square_feet ? movie.square_feet : ""}</span>
              </td>
            </tr>
            <tr>
              <td>Cap Rate</td>
              <td>
                <span>{movie.cap_rate ? movie.cap_rate : ""}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <div class="title-border">
            <h4>DESCRIPTION</h4>
          </div>
          <div class="mr-bottom-20">
            <p>
              {movie.description ? movie.description : ""}
            </p>
          </div>
        </div>
      </div>


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
