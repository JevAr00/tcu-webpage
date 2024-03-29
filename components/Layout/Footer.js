import styled from 'styled-components';
import { colors, breakpoints } from 'public/theme';
import { Email, Facebook, Location, Phone, Waze } from '../Icons';
import { motion } from 'framer-motion';

const SFooter = styled.footer`
	display: flex;
	min-width: 100vh;
  min-height: 50vh;
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

	@media (max-width: ${breakpoints.large}) {
		h1{
			margin: 1rem 0rem;
			text-align: center;
		}	
	}
`;

const Div = styled.footer`
	width: 100%;
	min-width: 100vh;
	min-height: 50vh;
	background-color: ${colors.secundario};

	@media(max-width: 700px) and (min-width: 300px){
		min-width: 150vh;
	}
`;

// #region Grid
const Grid = styled.div`
	display: flex;
	padding: 1rem 1.5rem;
	justify-content: center;

	@media (max-width: ${breakpoints.large}) {
		flex-direction: column;
	}
`;

const Info = styled.div`
	width: 65%;
	align-self: center;
	font-size: 1.07rem;

	svg{
		min-width: 28pt;
	}

	div{
		display: flex;
		padding: 1rem 0;
		align-items: center;

		p{
			margin-inline: 1rem;
		}
		a{
			color: white;
		}
	}

	@media (max-width: ${breakpoints.large}) {
		width: 80%;

		div{
			justify-content: center;
		}
	}

	@media (max-width: ${breakpoints.medium}) {
		width: 90%;	
		word-wrap: break-word;

		p {
			font-size: 0.9rem;
		}
	}

	@media (max-width: ${breakpoints.small}) {
		div{
			justify-content: left;
		}
		a{
			word-break: break-all;
		}
	}
`;

// Line
const Divisor = styled.div`
	width: 11px;
	height: 270px;
	margin-right: 3vw;
	border-radius: 11px;
	background-color: #66738d;

	@media (max-width: ${breakpoints.large}) {
		width: 80%;
		height: 11px;
		align-self: center;
		margin: 1.4rem 0 0 0;
	}
`;

const Icons = styled.div`
	width: 25%;
	display: flex;
	justify-content: space-evenly;

	a{
		align-self: center;	
		transition: all 0.4s ease-in-out;
	}
	
	a:hover{
		transform: scale(1.10);
	}

	@media (max-width: ${breakpoints.large}) {
		width: 100%;
		align-self: center;
		margin: 2rem 0rem;
		padding-inline: 8vw;
	}
`;
// #endregion Grid

const Dev = styled.div`
	padding-top: 5rem;
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
	width: '28pt',
	height: '28pt',
};

export const Footer = () => {

	const fadeIn = {
		screenOn:{ opacity: 0 },
		screenOff:{ opacity: 1,
			transition:{ type: 'spring',
				duration: 2 },
		},
	};

	return (
		<Div>
			<SFooter id='Contacto' >
				<h1>Contáctenos</h1>
				<motion.div
					variants={fadeIn}
					initial={'screenOn'}
					whileInView={'screenOff'}
					transition={{ staggerChildren: 0.3 }}
					viewport={{ once:false, amount: 0.4 }}>
					<Grid>
						<Info>
							<div>
								<Phone {...size}/>
								<p><a href="tel:+50624944812">2494-4812</a></p>
							</div>
							<div>
								<Email {...size}/>
								<p><a href="mailto:esc.ramonherrerovitoria@mep.go.cr?">esc.ramonherrerovitoria@mep.go.cr</a></p>
							</div>
							<div>
								<Location {...size}/>
								<p><a href="https://goo.gl/maps/KripKY3aTpqe8VDB8">Puente de Piedra, La Argentina, Diagonal a la plaza de Deportes.</a></p>
							</div>
						</Info>
						<Divisor/>
						<Icons>
							<a href='https://www.facebook.com/escuelaramon.herrerovitoria' target='_blank' rel="noreferrer"><Facebook /></a>
							<a href='https://ul.waze.com/ul?preview_venue_id=180617316.1806500843.680297&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' target='_blank' rel="noreferrer"><Waze /></a>
						</Icons>
					</Grid>
				</motion.div>

				<motion.div
					variants={fadeIn}
					initial={'screenOn'}
					whileInView={'screenOff'}
					transition={{ staggerChildren: 0.2 }}
					viewport={{ once:false, amount: 0.5 }}>
					<Dev>
						<p>Escuela Ramón Herrero Vitoria</p>
						<p>by <a href='https://github.com/Soju13' target='_blank' rel="noreferrer">Jarot C</a>, <a href='https://github.com/JevAr00' target='_blank' rel="noreferrer">Kevin A</a> & <a href='https://github.com/alejimenez1' target='_blank' rel="noreferrer">Luis D</a></p>
					</Dev>
				</motion.div>

			</SFooter>
		</Div>
	);
};

export default Footer;