import styled from 'styled-components';
import { colors } from 'public/theme';
import { PhoneAlt } from '@styled-icons/fa-solid/PhoneAlt';

const Phone = styled(PhoneAlt)`
	width: ${props => props.width || '1rem'};
	height: ${props => props.height || '1rem'};
	color: ${colors.secundario};
`;

export default Phone;