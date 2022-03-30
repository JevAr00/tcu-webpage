import styled from 'styled-components';
import Table from '../Table';

const headers = ['Nombre', 'Apellidos', 'Grado'];
const Area = styled.div`
	width: 100%;
	border: 2px solid red;
`;

const PDocentes = () => {
	return (
		<Area>
			<div>
				<Table columns={headers}/>
			</div>
		</Area>
	);
};

export default PDocentes;