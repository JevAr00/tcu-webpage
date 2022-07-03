import Image from 'next/image';
import styles from 'styles/Home.module.css';
import bgImage from 'public/img/img_escuelaP.jpg';
import { motion, Variant } from 'framer-motion';


export default function Home() {

	const textAnimate = {
		offScreen:{ y:100, opacity: 0 },
		onScreen:{ y:0, opacity: 1,
			transition:{ type: 'spring',
				bounce:0.2,
				duration:2 },
		},
	};

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>&quot;Una escuela unida, es una escuela que progresa&quot;</h1>
				<div className={styles.img}>
					<Image
						src={bgImage}
						alt= 'img'
						layout='fill'
						objectFit='cover'
						className={styles.bg}
					></Image>
				</div>
			</main>

			<motion.div className={styles.mision_motion}
				initial={'offScreen'}
				whileInView={'onScreen'}
				viewport={{ once:false, amount: 0.4 }}
				transition={{ staggerChildren: 0.5 }}
			>

				<motion.div className={styles.tit_mivi}
					variants={textAnimate}
				>
					<h2>Misión</h2>
				</motion.div>

				<motion.div className={styles.tex_mivi}
					variants={textAnimate}
				>
					<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
				</motion.div>
			</motion.div>

			<motion.div className={styles.vision_motion}
				initial={'offScreen'}
				whileInView={'onScreen'}
				viewport={{ once:false, amount: 0.3 }}
				transition={{ staggerChildren: 0.5 }}
			>

				<motion.div className={styles.tit_mivi}
					variants={textAnimate}
				>
					<h2>Visión</h2>
				</motion.div>

				<motion.div className={styles.tex_mivi}
					variants={textAnimate}
				>
					<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
				</motion.div>

			</motion.div>

		</div>
	);
}
