import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../components/mainLayout';
import withReduxSaga from '../withReduxSaga';
import PropertyDetail from '../components/propertyDetail';
import configureStore from '../store';

function Property(props) {
    return (
        <MainLayout>
            <h1>
                Movie
      </h1>
            <PropertyDetail {...props} />
        </MainLayout>
    );
}

Movie.propTypes = {
    url: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    const { url } = ownProps;
    const id = url.query.id;
    const movie = state.entities.movies[id] || {};
    return {
        movie,
    };
}

export default withReduxSaga(configureStore, mapStateToProps)(Property, {
    server: { type: 'GET_PROPERTY_SERVER' },
    client: { type: 'GET_PROPERTY' },
});
