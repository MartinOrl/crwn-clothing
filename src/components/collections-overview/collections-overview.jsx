import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CollectionPreview from '../preview-collection/preview'

import { selectCollectionsForPreview } from '../../redux/shop-reducer/shopSelector'

import { CollectionsOverviewContainer } from './collections-overviewStyles'

const CollectionsOverview = ({collections}) => (
        <CollectionsOverviewContainer>
            {
                collections
                .map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionsOverviewContainer>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})




export default connect(mapStateToProps)(CollectionsOverview)