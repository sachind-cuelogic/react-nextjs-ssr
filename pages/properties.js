import React from 'react';
import withReduxSaga from '../withReduxSaga';
import Head from '../components/head';
import MainLayout from '../components/mainLayout';
import PropertyList from '../components/propertyList';
import configureStore from '../store';

function Properties(props) {
    return (
        <MainLayout>
            <Head title="Movies" />
            <h1>Movies</h1>
            <PropertyList {...props} />
        </MainLayout>
    );
}

function mapStateToProps(state) {
    return {
        movies: state.movies.list.map(id => state.entities.movies[id]) || [],
        isFetching: state.movies.isFetching,
    };
}


export default withReduxSaga(configureStore, mapStateToProps)(Properties, { type: 'GET_MOVIES' });
