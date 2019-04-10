export default function properties(state = { list: [], isFetching: false, error: '' }, action) {
    console.log("reducer action==>>>", action)
    var { type, payload } = action;
    switch (type) {
        case 'GET_PROPERTY_PENDING':
            return Object.assign({}, state, {
                isFetching: true
            });

        case 'GET_PROPERTY_FULFILLED':
            console.log("reducer payload ==>>>", payload)
            return Object.assign({}, state, {
                isFetching: false,
                list: payload,
            });
        case 'GET_MOVIES_REJECTED':
            return Object.assign({}, state, {
                isFetching: false,
                error: 'An Error Ocurred',
            });
        default:
            return state;
    }
}
