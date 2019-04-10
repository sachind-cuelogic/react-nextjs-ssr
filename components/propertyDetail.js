import React from 'react';
import PropTypes from 'prop-types';

function propertyDetail({ properties }) {
    console.log("propertyDetail  ==>>", properties)
    return (

        <div>
            <h1>Propety Detail</h1>
        </div>

        // <div role="tabpanel" class="tab-pane active" id="propertyDetails">
        //     <div class="title text-left">
        //         <h3>{this.props.country.propertyData[0].title}</h3>
        //     </div>
        //     <table class="table table-border-none">
        //         <tbody>
        //             <tr>
        //                 <td>Listing Price</td>
        //                 <td class="font-lg">
        //                     <span>{this.props.country.propertyData[0].price}</span>
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        //     <div class="title-border">
        //         <h4>PROPERTY INFORMATION</h4>
        //     </div>
        //     <table class="table table-border-none">
        //         <tbody>
        //             <tr>
        //                 <td>Property Type</td>
        //                 <td>{this.props.country.propertyData[0].listing_group}</td>
        //             </tr>
        //         </tbody>
        //     </table>
        //     <div class="title-border">
        //         <h4>DETAILS</h4>
        //     </div>
        //     <table class="table table-border-none">
        //         <tbody>
        //             <tr>
        //                 <td>Building Square Feet</td>
        //                 <td>
        //                     <span>{this.props.country.propertyData[0].square_feet}</span>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <td>Cap Rate</td>
        //                 <td>
        //                     <span>{this.props.country.propertyData[0].cap_rate}</span>
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        //     <div>
        //         <div class="title-border">
        //             <h4>DESCRIPTION</h4>
        //         </div>
        //         <div class="mr-bottom-20">
        //             <p>
        //                 {this.props.country.propertyData[0].description}
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
}

propertyDetail.propTypes = {
    properties: PropTypes.array.isRequired,
};


// MovieList.propTypes = {
//     movies: PropTypes.array.isRequired,
//   };

propertyDetail.defaultProps = {
    properties: {},
};

export default propertyDetail;
