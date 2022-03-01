import styled from 'styled-components';
import { colors } from '/public/theme';
import { PhoneAlt } from '@styled-icons/fa-solid/PhoneAlt';

const size = 40;

const Phone = styled(PhoneAlt)`
	width: ${size}px;
	height: ${size}px;
	color: ${colors.secundario};
`;

export default Phone;