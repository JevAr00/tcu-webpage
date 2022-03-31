import styled from 'styled-components';
import { colors } from 'public/theme';

const Table = styled.table`
	width: 100%;
	padding: 4rem 2rem;
	table-layout: fixed;
`;

const THead = styled.thead`
	th{
			padding: 20px 15px;
  		text-align: center;
  		font-weight: 500;
  		font-size: 12px;
  		color: #fff;
  		text-transform: uppercase;
			background-color: ${colors.secundario};
		}
`;

const TBody = styled.tbody`
	height: 100%;
	/* position: fixed; */
	overflow-y: scroll;
	tab-size: 100%;
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
		<Table cellPadding={0} cellSpacing={0} border={0}>
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
	);
};

module.exports = dataTable;