import styles from 'styles/Dashboard.module.css';
import { Navbar } from 'components/Dashboard';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Dashboard() {

	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.tableContainer}>
				a
			</div>
		</div>
	);
}

export const getServerSideProps = withPageAuthRequired();