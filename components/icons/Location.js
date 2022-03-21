import styled from 'styled-components';
import { colors } from 'public/theme';
import { LocationOn } from '@styled-icons/material/LocationOn';

const Location = styled(LocationOn)`
	width: ${props => props.width || '1rem'};
	height: ${props => props.height || '1rem'};
	color: ${colors.secundario};
`;

export default Location;