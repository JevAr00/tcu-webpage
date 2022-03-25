import styled from 'styled-components';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import usePanel from 'hooks/usePanel';
import { colors } from 'public/theme';
import { Exit } from 'components/Icons';
import { Panel } from 'components/Dashboard';
import styles from 'styles/Dashboard.module.css';

const Header = styled.header`
	display: flex;
	flex-direction: column;
	width: 14rem;
	height: 100%;
	align-items: center;
	justify-content: space-around;
	background-color: ${colors.principal};

	h1{
		margin:0;
		font-size: 1.5rem;
	}
`;

const OptionContainer = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	width: 100%;
	height: 80%;
`;

const Option = styled.div`
	width: 94%;
	height: 3.3rem;
	margin-bottom: 1rem;
	text-align: center;
	line-height: 3.2rem;
	border-radius: 2rem 0 0 2rem;
	background-color: white;
`;

const Button = styled.button`
	font-size: 1.4rem;
	width: 100%;
	height: 100%;
	color: ${colors.footer};
	border: none;
	background-color: transparent;
	border-radius: 2rem 0 0 2rem;

	&:hover{
		cursor: pointer;
	}
`;


export default function Dashboard() {
	const { panel, selectPanel } = usePanel();

	return (
		<div className={styles.container}>
			<Header>
				<h1>Dashboard</h1>
				<OptionContainer>
					<Option>
						<Button onClick={() => selectPanel('docente')}>Docentes</Button>
					</Option>
				</OptionContainer>
				<Exit href='/logout'/>
			</Header>
			<Panel selectedPanel={panel}/>
		</div>
	);
}

export const getServerSideProps = withPageAuthRequired();