import axios from 'axios';
import Table from '../Table';
import styled from 'styled-components';
import ModalComponent from '../Modal';
import { colors } from 'public/theme';
import { useEffect, useState } from 'react';
import { ModalContext } from 'utils/helpers/context';

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
	position: relative;
	top: 70%;
	right: 14%;
	width: 8rem;
	height: 2.5rem;
	font-size: 15px;
	color: white; 
	border: 0;
	border-radius: 6px;
	background-color: ${colors.secundario};

	&:hover{
		cursor: pointer;
	}

	&:active{
		opacity: 0.75;
		background-color: ${colors.secundario};
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