import styled from 'styled-components';
import Table from '../Table';

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

const PDocentes = () => {
	return (
		<Area>
			<Table data={dbData} columns={headers}/>
		</Area>

	);
};

export default PDocentes;