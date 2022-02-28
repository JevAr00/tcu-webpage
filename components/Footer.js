import styled from 'styled-components';
import { colors } from '../public/theme';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Waze } from '@styled-icons/simple-icons/Waze';

const SFooter = styled.footer`
	width: 100%;
	height: 600px;
	border-radius: 30px 30px 0px 0px;
	background-color: ${colors.footer};

	h1{
		padding: 30px;
	}
`;

// #region Grid
const Section = styled.section`
	display: grid;
	margin-left: 20px;
	margin-right: 20px;
	grid-template-columns: 1.7fr 0.03fr 1fr;
	grid-column-gap: 0px;
`;

// Columna 1
const Info = styled.div`
 padding-left: 40px;
`;

// Columna 2
const Divisor = styled.div`
	width: 11px;
	height: 270px;
  overflow: visible;
  border-radius: 11px;
	background-color: #66738d;
`;

// Columna 3
const Icons = styled.div`
	display: flex;
	align-self: center;
	padding-left: 60px;
	padding-right: 60px;
	justify-content: space-evenly;
`;

// #region Iconos
const SFacebook = styled(Facebook)`
	width: 120px;
	height: 120px;
	
`;

const SWaze = styled(Waze)`
	width: 120px;
	height: 120px;
`;
// #endregion Iconos

// #endregion Grid

const Footer = () => {
	return (
		<SFooter id='footer'>
			<h1>Contactenos</h1>
			<Section>
				<Info>
					<div>
						<p>2494-4812</p>
					</div>
					<div>
						<p>esc.ramonherrerovitoria@mep.go.cr</p>
					</div>
					<div>
						<p>Puente de Piedra, La Argentina, Diagonal a la plaza de Deportes.</p>
					</div>
				</Info>
				<Divisor />
				<Icons>
					<div><SFacebook /></div>
					<div><SWaze /></div>
				</Icons>
			</Section>
		</SFooter>
	);
};

export default Footer;