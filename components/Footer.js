import styled from 'styled-components';
import { colors, breakpoints } from '/public/theme';
import { icons } from './icons';

const SFooter = styled.footer`
	position: relative;
	width: 100%;
	min-height: 34rem;
	border-radius: 30px 30px 0px 0px;
	background-color: ${colors.footer};

	h1{
		padding: 30px;
		color: white;
	}
`;

// #region Grid
const Grid = styled.div`
 	display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

	@media (max-width: ${breakpoints.x_large}) {
		width: 100%;
    flex-direction: column;
	}
`;

// Columna 1
const Info = styled.div`
	/*align-self: center;
	padding-left: 58px;
	
	div{
		display: flexbox;
		align-items: center;
	}
	
	p{
		margin-left: 18px;
		font-size: 1.2rem;
		color: white;
	}*/
`;

// Columna 2
const Divisor = styled.div`
	width: 11px;
	height: 270px;
  overflow: visible;
  border-radius: 11px;
	background-color: #66738d;

	@media (max-width: ${breakpoints.x_large}) {
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

export const Footer = () => {
	return (
		<SFooter id='footer'>
			<h1>Contactenos</h1>
			<Grid>
				<Info>
					<div>
						<icons.Phone />
						<p>2494-4812</p>
					</div>
					<div>
						<icons.Email />
						<p>esc.ramonherrerovitoria@mep.go.cr</p>
					</div>
					<div>
						<icons.Location />
						<p>Puente de Piedra, La Argentina, Diagonal a la plaza de Deportes.</p>
					</div>
				</Info>
				<Divisor />
				<Icons>
					<a href='https://www.facebook.com/escuelaramon.herrerovitoria' target='_blank' rel="noreferrer"><icons.SFacebook /></a>
					<a href='https://ul.waze.com/ul?preview_venue_id=180617316.1806500843.680297&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' target='_blank' rel="noreferrer"><icons.SWaze /></a>
				</Icons>
			</Grid>
			<Dev>
				<p>Escuela Ramón Herrero Vitoria. Copyright © 2022. Todos los derechos reservados.</p>
				<p>by <a href='https://github.com/Soju13' target='_blank' rel="noreferrer">Jarot C</a>, <a href='https://github.com/JevAr00' target='_blank' rel="noreferrer">Kevin A</a> & <a href='https://github.com/alejimenez1' target='_blank' rel="noreferrer">Luis D</a></p>
			</Dev>
		</SFooter>
	);
};

export default Footer;