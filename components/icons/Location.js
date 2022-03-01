import styled from 'styled-components';
import { colors } from '/public/theme';
import { LocationOn } from '@styled-icons/material/LocationOn';

const size = 40;

const Location = styled(LocationOn)`
	width: ${size}px;
	height: ${size}px;
	color: ${colors.secundario};
`;

export default Location;