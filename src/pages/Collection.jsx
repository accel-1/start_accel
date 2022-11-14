import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';

import img1 from '../assets/images/collection/banner-collection.jpg'
import img2 from '../assets/images/collection/img-banner-collection.png'
import { Link } from 'react-router-dom';
import HotPick4 from '../components/hotpick/HotPick4';
import dataHotpick from '../assets/fake-data/data-hotpick';

Collection.propTypes = {
    
};

function Collection(props) {
    return (
        <div className='page-collection'>
            <PageTitle sub='Explore' title='Collection' />

            
                
            <HotPick4 data={dataHotpick} />
            
        </div>
    );
}

export default Collection;