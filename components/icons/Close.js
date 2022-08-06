import styled from 'styled-components';
import { colors } from 'public/theme';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

const Close = styled(CloseOutline)`
  position: relative;
  right: 2%;
  margin-top: 10pt;
  min-width: 28pt;
  height: 28pt;
  scale: 1.5;
  color: ${colors.secundario};

  &:hover{
    cursor: pointer;
  }
`;

export default Close;