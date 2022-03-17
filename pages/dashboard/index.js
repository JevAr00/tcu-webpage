import styles from 'styles/Dashboard.module.css';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Dashboard() {

	return (
		<div className={styles.main}>
			<h1>Hola</h1>
			<a href='/logout'>Salir</a>
		</div>
	);
}

export const getServerSideProps = withPageAuthRequired();