import Image from 'next/image';
import styles from 'styles/Home.module.css';
import bgImage from 'public/img/img_escuelaP.jpg';
import { motion, useViewportScroll, useTransform } from 'framer-motion';


export default function Home() {
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

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
						objectPosition='center'
						className={styles.bg}
					></Image>
				</div>
			</main>
			<div className={styles.mivi}>
				<div className={styles.mision}>
					<h2 className={styles.tit_mivi}>Misión</h2>
					<p className={styles.tex_mivi}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				</div>
				<div className={styles.vision}>
					<h2 className={styles.tit_mivi}>Visión</h2>
					<p className={styles.tex_mivi}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				</div>

				<motion.div
					style={{ scale }}
				>
					<h2 className={styles.tit_mivi}>Visión</h2>
					<p className={styles.tex_mivi}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				</motion.div>
			</div>
		</div>
	);
}
