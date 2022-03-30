import styled from 'styled-components';
import Table from '../Table';

const headers = ['Nombre', 'Apellidos', 'Grado'];

const Area = styled.div`
	height: 100%;
	width: 100%;
	/* background-color: blue; */
`;

const PDocentes = () => {
	return (
		<Area>
			<Table columns={headers}/>
		</Area>
	);
};

export default PDocentes;