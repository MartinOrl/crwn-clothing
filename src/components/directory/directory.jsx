import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory-reducer/directorySelector'

import Menuitem from '../menu-item/menu-item'

import { DirectoryMenu } from './directoryStyles'

const Directory = ({sections}) => (
            <DirectoryMenu>
                {sections.map(({id, ...otherSectionProps}) => (
                    <Menuitem key={id} {...otherSectionProps} />
                ))}
            </DirectoryMenu>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})



export default connect(mapStateToProps, null)(Directory);