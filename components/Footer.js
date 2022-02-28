import styled from 'styled-components';
import { colors } from '../public/theme';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Waze } from '@styled-icons/simple-icons/Waze';
import { PhoneAlt } from '@styled-icons/fa-solid/PhoneAlt';
import { Mail } from '@styled-icons/entypo/Mail';
import { LocationOn } from '@styled-icons/material/LocationOn';

const SFooter = styled.footer`
	position: relative;
	width: 100%;
	height: 550px;
	border-radius: 30px 30px 0px 0px;
	background-color: ${colors.footer};

	h1{
		padding: 30px;
		color: white;
	}
`;

// #region Grid
const Section = styled.section`
	display: grid;
	margin-left: 20px;
	margin-right: 20px;
	grid-template-columns: 2.2fr 0.05fr 1fr;

	@media screen and (max-width: 1024px){
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 0.06fr 1fr;
		margin-left: 0px;
		margin-right: 0px;
		transform: scale(1);
	}
`;

// Columna 1
const Info = styled.div`
	align-self: center;
	padding-left: 58px;
	
	div{
		display: flexbox;
		align-items: center;
	}
	
	p{
		margin-left: 18px;
		font-size: 1.2rem;
		color: white;
	}
`;

// Columna 2
const Divisor = styled.div`
	width: 11px;
	height: 270px;
  overflow: visible;
  border-radius: 11px;
	background-color: #66738d;

	@media screen and (max-width: 1024px) {
		align-self: center;
		width: 70%;
		height: 11px;
	}
`;

// Columna 3
const Icons = styled.div`
	display: flex;
	justify-content: space-evenly;

	a{
		align-self: center;	
		transition: all 0.4s ease-in-out;
	}
	
	a:hover{
		transform: scale(1.10);
	}
`;

// #region Iconos
const SFacebook = styled(Facebook)`
	width: 120px;
	height: 120px;
	color: white;

	&:hover{
		color: ${colors.facebook};
	}
`;

const SWaze = styled(Waze)`
	width: 120px;
	height: 120px;
	color: white;

	&:hover{
		color: ${colors.waze};
	}
`;

const size = 40;

const Phone = styled(PhoneAlt)`
	width: ${size}px;
	height: ${size}px;
	color: ${colors.secundario};
`;

const Email = styled(Mail)`
	width: ${size}px;
	height: ${size}px;
	color: ${colors.secundario};
`;

const Location = styled(LocationOn)`
	width: ${size}px;
	height: ${size}px;
	color: ${colors.secundario};
`;
// #endregion Iconos

// #endregion Grid

const Dev = styled.div`
	position: absolute;
	bottom: 0;
	left:0; 
	right:0;
	text-align: center;

	p{
		color: #A6A6A6;
	}

	a{
		color : ${colors.secundario};
	}
`;

const Footer = () => {
	return (
		<SFooter id='footer'>
			<h1>Contactenos</h1>
			<Section>
				<Info>
					<div>
						<Phone />
						<p>2494-4812</p>
					</div>
					<div>
						<Email />
						<p>esc.ramonherrerovitoria@mep.go.cr</p>
					</div>
					<div>
						<Location />
						<p>Puente de Piedra, La Argentina, Diagonal a la plaza de Deportes.</p>
					</div>
				</Info>
				<Divisor />
				<Icons>
					<a href='https://www.facebook.com/escuelaramon.herrerovitoria' target='_blank' rel="noreferrer"><SFacebook /></a>
					<a href='https://ul.waze.com/ul?preview_venue_id=180617316.1806500843.680297&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' target='_blank' rel="noreferrer"><SWaze /></a>
				</Icons>
			</Section>
			<Dev>
				<p>Escuela Ramón Herrero Vitoria. Copyright © 2022. Todos los derechos reservados.</p>
				<p>by <a href='https://github.com/Soju13' target='_blank' rel="noreferrer">Jarot C</a>, <a href='https://github.com/JevAr00' target='_blank' rel="noreferrer">Kevin A</a> & <a href='https://github.com/alejimenez1' target='_blank' rel="noreferrer">Luis D</a></p>
			</Dev>
		</SFooter>
	);
};

export default Footer;