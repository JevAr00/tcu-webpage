import styled from 'styled-components';
import Table from '../Table';
import ModalComponent from '../Modal';
import { ModalContext } from 'utils/helpers/context';
import { colors } from 'public/theme';
import { useEffect, useState } from 'react';
import axios from 'axios';

const headers = ['Nombre', 'Apellido', 'Correo', 'Tipo'];


const Area = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;

`;

const Button = styled.button`
	width: 8rem;
	height: 2.5rem;
	font-size: 15px; 
	position: absolute;
	bottom: 27%;
	right: 10%;
	border: 0;
	border-radius: 6px;
	background-color: ${colors.secundario};
	color: white;

	&:hover{
		cursor: pointer;
	}

	&:active{
		background-color: ${colors.secundario};
		opacity: 0.75;
	}
`;


const PDocentes = () => {
	const [visible, setVisible] = useState(false);
	const [info, setInfo] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get('api/personal/getPersonal');
			setInfo(data);
		})();
	}, []);

	return (
		<>
			<Area>
				<Table data ={info} columns={headers}/>
			</Area>
			<Button onClick={() => { setVisible(!visible); }}>Nuevo</Button>
			<ModalContext.Provider value={{ visible, setVisible }}>
				<ModalComponent/>
			</ModalContext.Provider>
		</>
	);
};


export default PDocentes;