import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';


export const DropMenu = styled(Menu)``;

export const DropMenuItem = styled(MenuItem)`
  &&& {
    &:hover {
      background: #27AFFF;
    }
    min-width: 160px;
  }
`;
