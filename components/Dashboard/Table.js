const Table = ({ data, columns }) => {
	return (
		<table>
			<thead>
				<tr>
					{
						columns.map((columna) => (
							<th key={columna}>{columna}</th>
						))
					}
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<td>3</td>
					<td colSpan={2}>Larry the Bird</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		</table>
	);
};

module.exports = Table;