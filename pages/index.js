import Image from 'next/image';
import styles from 'styles/Home.module.css';
import bgImage from 'public/img/img_escuelaP.jpg';

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>&quot;Una escuela unida es una escuela que progresa&quot;</h1>
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
		</div>
	);
}
