import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory-reducer/directorySelector'

import Menuitem from '../menu-item/menu-item'

import './directory.scss'

const Directory = ({sections}) => (
            <div className='directory-menu'>
                {sections.map(({id, ...otherSectionProps}) => (
                    <Menuitem key={id} {...otherSectionProps} />
                ))}
            </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})



export default connect(mapStateToProps, null)(Directory);