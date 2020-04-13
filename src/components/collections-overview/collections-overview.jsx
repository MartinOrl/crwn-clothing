import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './collections-overview.scss'

import CollectionPreview from '../preview-collection/preview'

import { selectCollectionsForPreview } from '../../redux/shop-reducer/shopSelector'

const CollectionsOverview = ({collections}) => (
        <div className='colections-overview'>
            {
                collections
                .map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})




export default connect(mapStateToProps)(CollectionsOverview)