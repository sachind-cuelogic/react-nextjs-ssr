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

        // movies: state.properties.list.map(id => state.entities.properties[id]) || [],
        //isFetching: state.properties.isFetching,

        movies: state.properties.list || [],
        isFetching: state.properties.isFetching,
    };
}


export default withReduxSaga(configureStore, mapStateToProps)(Properties, { type: 'GET_PROPERTY' });
