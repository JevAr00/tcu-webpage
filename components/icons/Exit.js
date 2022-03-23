import styled from 'styled-components';
import { colors } from 'public/theme';
import { Exit } from '@styled-icons/ionicons-outline/Exit';

const SExit = styled(Exit)`
  min-width: 28pt;
  height: 28pt;
  color: ${colors.secundario};

  &:hover{
    cursor: pointer;
  }
`;

export default SExit;