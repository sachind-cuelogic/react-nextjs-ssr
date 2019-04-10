import { call, put, END, take, fork, takeEvery } from 'redux-saga/effects';
import { get } from '../libs/http';
import { propertyArraySchema, propertySchema, normalize } from '../libs/normalize';
import parseResponse from '../libs/parseResponse';

function* fetchProperty(action) {
    console.log("action==>>>", action)
    const id = action.query.id;
    try {
        yield put({ type: 'GET_PROPERTY_PENDING' });
        // const response = yield call(get, `https://devapi.biproxi.com/v1/listing?listing_id=${id}`);

        const response = yield call(get, `https://devapi.biproxi.com/v1/listing?listing_id=${id}`, {
            transformResponse: [data => data],
        });

        console.log("response==>>>", response)
        yield put({ type: 'GET_PROPERTY_FULFILLED', payload: response.data.data });
    } catch (error) {
        console.warn("error==>>>", error);
        yield put({ type: 'GET_PROPERTY_REJECTED' });
    }
}


export function* fetchPropertyData() {
    yield takeEvery('GET_PROPERTY', fetchProperty);
}

export function* fetchPropertyServer() {
    var action = yield take('GET_PROPERTY_SERVER');
    while (action !== END) {
        yield fork(fetchPropertyData, action);
        action = yield take('GET_PROPERTY_SERVER');
    }
}
