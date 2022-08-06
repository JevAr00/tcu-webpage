import styled from 'styled-components';
import { useState } from 'react';
import { colors } from 'public/theme';
import ModalComponent from './Modal';
import { ModalContext } from 'utils/helpers/context';


const TableContainer = styled.div`
	width: 85rem;
	height: 40rem;
	margin-top:3rem;
`;

const Table = styled.table`
	display: flex;
  flex-direction: column;

  tr {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
`;

const THead = styled.thead`
	border-radius: 1rem 1rem 0 0;
	background-color: ${colors.secundario};

	th{
  	color:  white;
		padding: 20px 0;
		font-size: 12px;
  	font-weight: 500;
		text-align: center;
		align-self: center;
  	text-transform: uppercase;
	}
`;

const TBody = styled.tbody`
	height: 36rem;
  overflow-y: scroll;
	border-radius: 0 0 1rem 1rem;
	background-color: ${colors.principal};

	::-webkit-scrollbar{
  	width: 10px;
	}

	::-webkit-scrollbar-thumb:hover {
  	border-radius: 5px;
  	background-color: hsla(204, 44%, 55%, 0.932);
	}

	::-webkit-scrollbar-thumb {
  	border-radius: 5px;
  	background-color: hsla(204, 44%, 55%, 0.726);
	}

	tr{
		cursor: pointer;
	}

	td {
		height: 4rem;
  	font-weight: 400;
  	text-align: center;
		align-self: center;
		padding: 1rem .8rem;
	}
`;

const DataTable = ({ data, columns }) => {
	const [visible, setVisible] = useState(false);
	const [info, setInfo] = useState({});

	const getCurrentRow = (selectedRow) => {
		setInfo(selectedRow);
		setVisible(!visible);
	};
	return (
		<>
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
								<tr key={datos.idP} onClick={() => getCurrentRow(datos)}>
									<td>{datos.nombre}</td>
									<td>{datos.apellido}</td>
									<td>{datos.correo}</td>
									<td>{datos.tipo}</td>
								</tr>
							))
						}
					</TBody>
				</Table>
			</TableContainer>
			<ModalContext.Provider value={{ visible, setVisible }}>
				<ModalComponent activeButton={visible} dataRow={info}/>
			</ModalContext.Provider>
		</>
	);
};

module.exports = DataTable;