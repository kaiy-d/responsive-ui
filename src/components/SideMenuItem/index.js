import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const Item = ({ active, title, onClick }) => (
  <Styled.ItemContainer
    onClick={onClick}
    active={active}
  >
    <div>{title}</div>
  </Styled.ItemContainer>
);

Item.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export default Item;