import styled from 'styled-components';
import { colors } from 'public/theme';

const Table = styled.table`
	width: 100%;
	padding: 4rem 2rem;
	table-layout: fixed;
`;

const THead = styled.thead`
	background-color: ${colors.secundario};

	th{
			padding: 20px 15px;
  		text-align: center;
  		font-weight: 500;
  		font-size: 12px;
  		color: #fff;
  		text-transform: uppercase;
		}
`;

const TBody = styled.tbody`
	height: 100px;
  overflow-x: auto;
	background-color: ${colors.principal};

	td {
  		padding: 15px;
  		text-align: left;
  		vertical-align: middle;
  		font-weight: 300;
		}
`;

const dataTable = ({ data, columns }) => {
	return (
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
			<tbody>
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
			</tbody>
		</Table>
	);
};

module.exports = dataTable;