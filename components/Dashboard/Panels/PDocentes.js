import styled from 'styled-components';
import Table from '../Table';
import { colors } from 'public/theme';
import { useState } from 'react';
import { Form, Formik, Field } from 'formik';

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

const Close = styled.button`
	border: none;
	background: none;
	margin-right: 10px;
	margin-top: 8px;
	font-size: 2.5rem;
	cursor: pointer;
`;

const TopDiv = styled.div`
	display: flex;
	justify-content: right;
`;

const MainDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const Modal = styled.div`
	visibility: ${props => props.visible === true ? 'visible' : 'hidden'};
	display: flex;
	position: absolute;
	width: 90%;
	height: 100%;
	background: rgba(0,0,0,0.5);
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	width: 1000px;
	height: 700px;
	border-radius: 10px;
	background: white;
`;

const PDocentes = () => {

	const [visible, setVisible] = useState(false);

	return (
		<>
			<Area>
				<Table data={dbData} columns={headers}/>
			</Area>
			<Button onClick={() => { setVisible(!visible); }}>Nuevo</Button>
			<Modal visible={visible}>
				<ModalContent>
					<TopDiv>
						<Close onClick={() => { setVisible(!visible); }}>X</Close>
					</TopDiv>
					<MainDiv>
						<Formik
							initialValues={{
								nombre: '',
								apellido: '',
							}}
							onSubmit = { (values) => {
								alert(JSON.stringify(values));
							}}
						>
							<Form>
								<label>Nombre</label>
								<Field name='nombre' type='text'></Field>
								<label>Apellidos</label>
								<Field name='apellido' type='text'></Field>
								<button type='submit'>Ver</button>
							</Form>
						</Formik>
					</MainDiv>
				</ModalContent>
			</Modal>
		</>
	);
};

export default PDocentes;