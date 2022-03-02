import styled from 'styled-components';
import { colors, breakpoints } from '/public/theme';
import { icons } from './icons';

const SFooter = styled.footer`
	display: flex;
	min-height: 34rem;
	flex-direction: column;
	border-radius: 30px 30px 0px 0px;
	background-color: ${colors.footer};

	h1{
		margin: 2rem;
		color: white;
	}

	p{
		color: white;
	}
`;

// #region Grid
const Grid = styled.div`
	display: flex;
  justify-content: center;
	padding: 1rem 1.5rem;

	@media (max-width: ${breakpoints.x_large}) {
		width: 100%;
    flex-direction: column;
	}
`;

const Info = styled.div`
	width: 65%;
	align-self: center;

	div{
		display: flex;
		margin: 1rem;
		align-items: center;

		p{
			margin-inline: 1rem;
			font-size: 1.07rem;
		}
	}
`;

// Line
const Divisor = styled.div`
	width: 11px;
	height: 270px;
	margin-right: 4rem;
  overflow: visible;
  border-radius: 11px;
	background-color: #66738d;

	@media (max-width: ${breakpoints.x_large}) {
		align-self: center;
		width: 60%;
		height: 11px;
	}
`;

const Icons = styled.div`
	display: flex;
	width: 25%;
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
	margin: auto 0 0 0;
	text-align: center;

	p{
		color: #A6A6A6;
	}

	a{
		color : ${colors.secundario};
	}
`;

const size = {
	width: '2.5rem',
	height: '2.5rem',
};

export const Footer = () => {
	return (
		<SFooter id='footer'>
			<h1>Contáctenos</h1>
			<Grid>
				<Info>
					<div>
						<icons.Phone {...size}/>
						<p>2494-4812</p>
					</div>
					<div>
						<icons.Email {...size}/>
						<p>esc.ramonherrerovitoria@mep.go.cr</p>
					</div>
					<div>
						<icons.Location {...size}/>
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