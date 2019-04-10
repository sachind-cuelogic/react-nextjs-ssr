import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../server/routes';

function propertyList({ movies }) {
    return (
        <div>
            <ol>
                <li><Link route={"/properties/9635"}><a>Crossing Plaza</a></Link></li>
                <li><Link route={"/properties/12681"}><a>Walgreens</a></Link></li>
                <li><Link route={"/properties/12764"}><a>7-Eleven</a></Link></li>
                <li><Link route={"/properties/11169"}><a>United Bank & Walnut Street Finance</a></Link></li>
                <li><Link route={"/properties/12713"}><a>BMO Harris Bank</a></Link></li>
                <li><Link route={"/properties/6988"}><a>10,286 SF Free Standing Office Bldg For Sale</a></Link></li>
            </ol>
        </div>
    );
}


export default propertyList;
