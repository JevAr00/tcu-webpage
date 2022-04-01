import styled from 'styled-components';
import { colors } from 'public/theme';


const TableContainer = styled.div`
	width: 85rem;
	height: 40rem; 
	margin-top:3rem;
`;

const Table = styled.table`
	display: flex;
  flex-direction: column;
	width:100%;
  
  tr {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
  }
`;

const THead = styled.thead`
	background-color: ${colors.secundario};

	th{
		padding: 20px 0;
  	text-align: center;
  	font-weight: 500;
  	font-size: 12px;
  	color: #fff;
  	text-transform: uppercase;
	}
`;

const TBody = styled.tbody`
  overflow-y: scroll;
  height: 36rem;
	background-color: ${colors.principal};

	td {
  	padding: 1rem .8rem;
  	text-align: left;
  	vertical-align: middle;
  	font-weight: 300;
	}
`;

const DataTable = ({ data, columns }) => {
	return (
		<TableContainer>
			<Table>
				<THead>
					<tr>
						{
							columns.map((columna) => (
								<th key={columna}>{columna}</th>
							))
						}
					</tr>
				</THead>
				<TBody>
					{
						data.map((datos) => (
							<tr key={datos}>
								<td>{datos.nombre}</td>
								<td>{datos.apellido}</td>
								<td>{datos.materias}</td>
								<td>{datos.grado}</td>
							</tr>
						))
					}
				</TBody>
			</Table>
		</TableContainer>
	);
};

module.exports = DataTable;