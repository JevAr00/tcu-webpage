import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from 'styles/Home.module.css';
import bgPersonal from 'public/img/pattern.png';
import bgImage from 'public/img/img_escuelaP.jpg';
import CardContainer from 'components/CardContainer';

export default function Home() {

	const inicio = {
		Scroon:{ y:-7, opacity: 0 },
		Scrooff:{ y:0, opacity: 1,
			transition:{ type: 'spring',
				duration: 3 },
		},
	};

	const opacity = {
		Scron:{ opacity: 0 },
		Scroff:{ opacity: 1,
			transition:{ type: 'spring',
				duration: 3 },
		},
	};

	const opacityImg = {
		Scron:{ opacity: 0 },
		Scroff:{ opacity: 1,
			transition:{ type: 'spring',
				duration: 2 },
		},
	};

	const opacity_mov = {
		offScreen:{ y:50, opacity: 0 },
		onScreen:{ y:0, opacity: 1,
			transition:{ type: 'spring',
				bounce:0.2,
				duration: 1 },
		},
	};


	return (
		<div className={styles.contenido}>

			<motion.div className={styles.inicio}
				initial={'Scroon'}
				whileInView={'Scrooff'}
				viewport={{ once:false, amount: 0.5 }}>

				<motion.div
					className={styles.title}
					variants={inicio}>
					<h1>&quot;Una escuela unida, es una escuela que progresa&quot;</h1>
				</motion.div>

				<motion.div className={styles.bgImage}
					initial={'Scron'}
					whileInView={'Scroff'}
					viewport={{ once:false, amount: 0.5 }}
					variants={opacityImg}>

					<Image
						priority
						alt='img'
						src={bgImage}
						layout='fill'
						objectFit='cover'
						className={styles.bg}
					 />

				</motion.div>

			</motion.div>

			<div className={styles.elements}>
				<motion.div
					id='Nosotros'
					initial={'offScreen'}
					whileInView={'onScreen'}
					className={styles.mision}
					transition={{ staggerChildren: 0.4 }}
					viewport={{ once:false, amount: 0.5 }}
				>

					<motion.div
						variants={opacity_mov}
						className={styles.tit_mivi}
					>
						<h2>Misión</h2>
					</motion.div>

					<motion.div
						variants={opacity_mov}
						className={styles.tex_mivi}
					>
						<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
					</motion.div>

				</motion.div>
			</div>

			<div className={styles.elements}>
				<motion.div
					initial={'offScreen'}
					whileInView={'onScreen'}
					className={styles.vision}
					transition={{ staggerChildren: 0.4 }}
					viewport={{ once:false, amount: 0.5 }}
				>

					<motion.div
						variants={opacity_mov}
						className={styles.tit_mivi}
					>
						<h2>Visión</h2>
					</motion.div>

					<motion.div
						variants={opacity_mov}
						className={styles.tex_mivi}
					>
						<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
					</motion.div>

					{/* <hr className={styles.line}></hr> */}

				</motion.div>
			</div>

			<div className={styles.elements}>

				<motion.div className={styles.objetivo}
					initial={'offScreen'}
					whileInView={'onScreen'}
					transition={{ staggerChildren: 0.4 }}
					viewport={{ once:false, amount: 0.5 }}>

					<motion.div
						variants={opacity_mov}
						className={styles.tit_objetivo}>
						<h2>Objetivo</h2>
					</motion.div>

					<motion.div
						variants={opacity_mov}
						className={styles.tex_objetivo}>
						<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
					</motion.div>
				</motion.div>
			</div>

			<motion.div id='Personal' className={styles.personal}
				initial={'Scron'}
				whileInView={'Scroff'}
				viewport={{ once:false, amount: 0.1 }}>

				<Image
					alt='pattern'
					layout='fill'
					quality={100}
					src={bgPersonal}
					objectFit='cover'
					className={styles.bgPersonal}
					 />

				<motion.div className={styles.tit_personal}
					variants={opacity}>
					<h2>Nuestro Personal</h2>
				</motion.div>

				<CardContainer/>
			</motion.div>

		</div>
	);
}
