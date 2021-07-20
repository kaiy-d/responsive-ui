import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const ItemContainer = styled(Paper)`
  padding: 15px 20px;
  margin-bottom: 10px;
  cursor: pointer;

  &&& {
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.05), 0px 1px 1px 0px rgba(0,0,0,0.1), 0px 2px 1px 2px rgba(0,0,0,0.05);
    border-top: 1px solid rgba(0,0,0,0.05);
    ${({ active }) => active ? 'border-left: 4px solid #FF5987' : ''};
    border-radius: 0px;
    color: #C1C1C1;
    text-transform: uppercase;
    font-size: 17px;
  }
`;
