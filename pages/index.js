import Image from 'next/image';
import styles from 'styles/Home.module.css';
import bgImage from 'public/img/img_escuelaP.jpg';
import { motion, useViewportScroll, Variant } from 'framer-motion';


export default function Home() {

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
			<div className={styles.mivi}>
				<motion.div className={styles.mision_motion}
				>
					<h2 className={styles.tit_mivi}>Misión</h2>
					<p className={styles.tex_mivi}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
				</motion.div>

				<motion.div className={styles.vision_motion}
				>
					<h2 className={styles.tit_mivi}>Visión</h2>
					<p className={styles.tex_mivi}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
				</motion.div>

			</div>
		</div>
	);
}
