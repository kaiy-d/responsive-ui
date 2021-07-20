import React from 'react';
import * as Styled from './styled';
import PropTypes from 'prop-types';

const Menu = ({ anchorEl, onClose }) => (
  <Styled.DropMenu
    id="drop-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={onClose}
  >
    <Styled.DropMenuItem onClick={onClose}>LAUNCH</Styled.DropMenuItem>
    <Styled.DropMenuItem onClick={onClose}>EDIT</Styled.DropMenuItem>
    <Styled.DropMenuItem onClick={onClose}>SHARE</Styled.DropMenuItem>
  </Styled.DropMenu>
);

Menu.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
};

export default Menu;

