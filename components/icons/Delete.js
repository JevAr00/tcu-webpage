import styled from 'styled-components';
import { colors } from 'public/theme';
import { DeleteDismiss } from '@styled-icons/fluentui-system-regular/DeleteDismiss';

const Delete = styled(DeleteDismiss)`
  visibility: ${props => props.active === true ? 'visible' : 'hidden'};
  position: relative;
  left: 74%;
  top: 8.3%;
  width: 28pt;
  height: 28pt;
  scale: 1.2;
  color: ${colors.secundario};

  &:hover{
    cursor: pointer;
    color: #C13B3B;
  }

  &:active{
    color: #C13B3B;
    opacity: 0.65;
  }
`;

export default Delete;