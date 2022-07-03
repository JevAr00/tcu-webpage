import styled from 'styled-components';
import Table from '../Table';
import ModalComponent from '../Modal';
import { colors } from 'public/theme';
import { useState } from 'react';

const headers = ['Nombre', 'Apellido', 'Materia', 'Grado'];
const dbData = [
	{ nombre:'Kevin', apellido:'Arias', materias: 'Computacion', grado: 'sexto' },
	{ nombre:'Juan', apellido:'Perez', materias: 'Ingles', grado: 'primero' },
	{ nombre:'Jacinto', apellido:'Jimenez', materias: 'Generales', grado: 'tercero' },
	{ nombre:'Luis', apellido:'Delgado', materias: 'Computacion', grado: 'segundo' },
	{ nombre:'David', apellido:'Hernandez', materias: 'Artes Plasticas', grado: 'quinto' },
	{ nombre:'Jarot', apellido:'Carmiol', materias: 'Computacion', grado: 'cuarto' },
	{ nombre:'Kevin', apellido:'Arias', materias: 'Computacion', grado: 'sexto' },
	{ nombre:'Juan', apellido:'Perez', materias: 'Ingles', grado: 'primero' },
	{ nombre:'Jacinto', apellido:'Jimenez', materias: 'Generales', grado: 'tercero' },
	{ nombre:'Luis', apellido:'Delgado', materias: 'Computacion', grado: 'segundo' },
	{ nombre:'David', apellido:'Hernandez', materias: 'Artes Plasticas', grado: 'quinto' },
	{ nombre:'Jarot', apellido:'Carmiol', materias: 'Computacion', grado: 'cuarto' },
	{ nombre:'Kevin', apellido:'Arias', materias: 'Computacion', grado: 'sexto' },
	{ nombre:'Juan', apellido:'Perez', materias: 'Ingles', grado: 'primero' },
	{ nombre:'Jacinto', apellido:'Jimenez', materias: 'Generales', grado: 'tercero' },
	{ nombre:'Luis', apellido:'Delgado', materias: 'Computacion', grado: 'segundo' },
	{ nombre:'David', apellido:'Hernandez', materias: 'Artes Plasticas', grado: 'quinto' },
	{ nombre:'Jarot', apellido:'Carmiol', materias: 'Computacion', grado: 'cuarto' },
	{ nombre:'Kevin', apellido:'Arias', materias: 'Computacion', grado: 'sexto' },
	{ nombre:'Juan', apellido:'Perez', materias: 'Ingles', grado: 'primero' },
	{ nombre:'Jacinto', apellido:'Jimenez', materias: 'Generales', grado: 'tercero' },
	{ nombre:'Luis', apellido:'Delgado', materias: 'Computacion', grado: 'segundo' },
	{ nombre:'David', apellido:'Hernandez', materias: 'Artes Plasticas', grado: 'quinto' },
	{ nombre:'Jarot', apellido:'Carmiol', materias: 'Computacion', grado: 'cuarto' },
	{ nombre:'Kevin', apellido:'Arias', materias: 'Computacion', grado: 'sexto' },
	{ nombre:'Juan', apellido:'Perez', materias: 'Ingles', grado: 'primero' },
	{ nombre:'Jacinto', apellido:'Jimenez', materias: 'Generales', grado: 'tercero' },
	{ nombre:'Luis', apellido:'Delgado', materias: 'Computacion', grado: 'segundo' },
	{ nombre:'David', apellido:'Hernandez', materias: 'Artes Plasticas', grado: 'quinto' },
	{ nombre:'Jarot', apellido:'Carmiol', materias: 'Computacion', grado: 'cuarto' },
	{ nombre:'Kevin', apellido:'Arias', materias: 'Computacion', grado: 'sexto' },
	{ nombre:'Juan', apellido:'Perez', materias: 'Ingles', grado: 'primero' },
	{ nombre:'Jacinto', apellido:'Jimenez', materias: 'Generales', grado: 'tercero' },
	{ nombre:'Luis', apellido:'Delgado', materias: 'Computacion', grado: 'segundo' },
	{ nombre:'David', apellido:'Hernandez', materias: 'Artes Plasticas', grado: 'quinto' },
	{ nombre:'Jarot', apellido:'Carmiol', materias: 'Computacion', grado: 'cuarto' },
	{ nombre:'Kevin', apellido:'Arias', materias: 'Computacion', grado: 'sexto' },
	{ nombre:'Juan', apellido:'Perez', materias: 'Ingles', grado: 'primero' },
	{ nombre:'Jacinto', apellido:'Jimenez', materias: 'Generales', grado: 'tercero' },
	{ nombre:'Luis', apellido:'Delgado', materias: 'Computacion', grado: 'segundo' },
	{ nombre:'David', apellido:'Hernandez', materias: 'Artes Plasticas', grado: 'quinto' },
	{ nombre:'Jarot', apellido:'Carmiol', materias: 'Computacion', grado: 'cuarto' },
	{ nombre:'Kevin', apellido:'Arias', materias: 'Computacion', grado: 'sexto' },
	{ nombre:'Juan', apellido:'Perez', materias: 'Ingles', grado: 'primero' },
	{ nombre:'Jacinto', apellido:'Jimenez', materias: 'Generales', grado: 'tercero' },
	{ nombre:'Luis', apellido:'Delgado', materias: 'Computacion', grado: 'segundo' },
	{ nombre:'David', apellido:'Hernandez', materias: 'Artes Plasticas', grado: 'quinto' },
	{ nombre:'Jarot', apellido:'Carmiol', materias: 'Computacion', grado: 'cuarto' },
];

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
	return (
		<>
			<Area>
				<Table data={dbData} columns={headers}/>
			</Area>
			<Button onClick={() => { setVisible(!visible); }}>Nuevo</Button>
			{ visible
				? <ModalComponent showModal={visible}/>
				: null
			}
		</>
	);
};

export default PDocentes;