import styles from 'styles/Dashboard.module.css';
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default function Dashboard() {

	return (
		<div className={styles.main}>
			<h1>Hola</h1>
			<a href='api/auth/logout'>Salir</a>
		</div>
	);
}

export const getServerSideProps = withPageAuthRequired();