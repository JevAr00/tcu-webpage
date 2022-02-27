import styled from 'styled-components';
import { colors } from '../public/theme';

const SFooter = styled.footer`
	width: 100%;
	height: 600px;
	border-radius: 30px 30px 0px 0px;
	background-color: ${colors.footer};

	h1{
		padding: 30px;
	}
`;

const Section = styled.section`
	display: grid;
	margin-left: 20px;
	margin-right: 20px;
	grid-template-columns: 1.7fr 0.03fr 1fr;
	grid-column-gap: 0px;
`;

const Info = styled.div`
 padding-left:40px;
`;

const Divisor = styled.div`
	width: 11px;
	height: 290px;
  overflow: visible;
  border-radius: 11px;
	background-color: #66738d;
`;

const Icons = styled.div`
 align-self: center;
`;

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

				</Icons>
			</Section>
		</SFooter>
	);
};

export default Footer;