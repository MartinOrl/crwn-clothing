import React from 'react'
import { withRouter } from 'react-router-dom'

import { MenuItemContainer, BackgroundImage, Content, Title, Subtitle } from './menu-itemStyles'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItemContainer>
  );
  
  export default withRouter(MenuItem);