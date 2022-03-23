import styles from 'styles/Dashboard.module.css';
import { Navbar } from 'components/Dashboard';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Dashboard() {

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div></div>
			</div>
		</>
	);
}

export const getServerSideProps = withPageAuthRequired();