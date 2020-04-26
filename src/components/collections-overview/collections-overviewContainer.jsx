import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { compose } from 'redux'

import CollectionsOverview from './collections-overview'
import WithSpinner from '../withSpinner/withSpinner'

import { selectIsCollectionFetching } from '../../redux/shop-reducer/shopSelector'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer