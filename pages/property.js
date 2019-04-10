import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'Components/mainLayout';
import withReduxSaga from '../withReduxSaga';
import PropertyDetail from 'Components/propertyDetail';
import configureStore from '../store';

function Property(props) {
    console.log("Property==>>>@@@@", props)
    return (
        <MainLayout>
            <h1>
                Property Details
            </h1>
            <section class="about-section">

                {
                    props.property.length ?
                        <div role="tabpanel" class="tab-pane active" id="propertyDetails">
                            <div class="title text-left">
                                <h3>{props.property[0].title}</h3>
                            </div>
                            <table class="table table-border-none">
                                <tbody>
                                    <tr>
                                        <td>Listing Price</td>
                                        <td class="font-lg">
                                            <span>{props.property[0].price}</span>
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
                                        <td>{props.property[0].listing_group}</td>
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
                                            <span>{props.property[0].square_feet}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cap Rate</td>
                                        <td>
                                            <span>{props.property[0].cap_rate}</span>
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
                                        {props.property[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
            </section>

            {/* <PropertyDetail {...props} /> */}
        </MainLayout>
    );
}

Property.propTypes = {
    url: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    const { url } = ownProps;
    const id = url.query.id;
    console.log("state properties ==>>>>", state.properties)
    const property = state.properties.list || {};
    console.log("moviemoviemovie==>>>", property)
    return {
        property,
    };



    // const { url } = ownProps;
    // const id = url.query.id;
    // console.log("state.entities==>>>", state.entities)
    // const property = state.properties[id] || {};
    // return {
    //     property,
    // };



}

export default withReduxSaga(configureStore, mapStateToProps)(Property, {
    server: { type: 'GET_PROPERTY_SERVER' },
    client: { type: 'GET_PROPERTY' },
});
