import Image from 'next/image';
import styles from 'styles/Home.module.css';
import bgImage from 'public/img/img_escuelaP.jpg';
import { motion } from 'framer-motion';

export default function Home() {

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
		<div className={styles.container}>

			<motion.div className={styles.header}
				initial={'Scron'}
				whileInView={'Scroff'}
				viewport={{ once:false, amount: 0.9 }}>

				<motion.div
					className={styles.title}
					variants={opacity}>
					<h1>&quot;Una escuela unida, es una escuela que progresa&quot;</h1>
				</motion.div>

				<motion.div
					initial={'Scron'}
					whileInView={'Scroff'}
					viewport={{ once:false, amount: 1 }}
					variants={opacityImg}>
					<Image
						alt= 'img'
						src={bgImage}
						layout='fill'
						objectFit='cover'
						className={styles.bg}
					></Image>
				</motion.div>

			</motion.div>

			<motion.div className={styles.mision_motion}
				initial={'offScreen'}
				whileInView={'onScreen'}
				viewport={{ once:false, amount: 0.5 }}
				transition={{ staggerChildren: 0.4 }}
			>

				<motion.div className={styles.tit_mivi}
					variants={opacity_mov}
				>
					<h2>Misión</h2>
				</motion.div>

				<motion.div className={styles.tex_mivi}
					variants={opacity_mov}
				>
					<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
				</motion.div>
			</motion.div>

			<motion.div className={styles.vision_motion}
				initial={'offScreen'}
				whileInView={'onScreen'}
				viewport={{ once:false, amount: 0.5 }}
				transition={{ staggerChildren: 0.4 }}
			>

				<motion.div className={styles.tit_mivi}
					variants={opacity_mov}
				>
					<h2>Visión</h2>
				</motion.div>

				<motion.div className={styles.tex_mivi}
					variants={opacity_mov}
				>
					<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
				</motion.div>

				{/* <hr className={styles.line}></hr> */}

			</motion.div>

			<motion.div className={styles.objetivo}
				initial={'Scron'}
				whileInView={'Scroff'}
				viewport={{ once:false, amount: 0.5 }}
				transition={{ staggerChildren: 0.4 }}>

				<motion.div
					className={styles.tit_objetivo}
					variants={opacity}>
					<h2>Objetivo</h2>
				</motion.div>

				<motion.div
					className={styles.tex_objetivo}
					variants={opacity}>
					<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
				</motion.div>
			</motion.div>

			<div className={styles.docentes}>
				<div className={styles.tit_docentes}>
					<h2>Nuestro Personal</h2>
				</div>
			</div>
		</div>
	);
}
