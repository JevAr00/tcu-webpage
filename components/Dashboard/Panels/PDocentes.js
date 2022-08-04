import styled from 'styled-components';
import Table from '../Table';
import ModalComponent from '../Modal';
import { ModalContext } from 'utils/helpers/context';
import { colors } from 'public/theme';
import { useState } from 'react';

const headers = ['Nombre', 'Apellido', 'Correo', 'Tipo'];
const dbData = [{
	'nombre': 'Udale',
	'apellido': 'Shenton',
	'correo': 'ushenton0@springer.com',
	'tipo': 'Director',
}, {
	'nombre': 'Clemmie',
	'apellido': 'Elner',
	'correo': 'celner1@nydailynews.com',
	'tipo': 'Product Management',
}, {
	'nombre': 'Cameron',
	'apellido': 'McDaid',
	'correo': 'cmcdaid2@typepad.com',
	'tipo': 'Engineering',
}, {
	'nombre': 'Conchita',
	'apellido': 'Bellinger',
	'correo': 'cbellinger3@techcrunch.com',
	'tipo': 'Human Resources',
}, {
	'nombre': 'Wini',
	'apellido': 'Poulston',
	'correo': 'wpoulston4@bandcamp.com',
	'tipo': 'Engineering',
}, {
	'nombre': 'Juan',
	'apellido': 'Cultcheth',
	'correo': 'jcultcheth5@bloglovin.com',
	'tipo': 'Legal',
}, {
	'nombre': 'Paloma',
	'apellido': 'Backshall',
	'correo': 'pbackshall6@booking.com',
	'tipo': 'Accounting',
}, {
	'nombre': 'Morton',
	'apellido': 'Craik',
	'correo': 'mcraik7@loc.gov',
	'tipo': 'Business Development',
}, {
	'nombre': 'Bonni',
	'apellido': 'Northfield',
	'correo': 'bnorthfield8@zdnet.com',
	'tipo': 'Accounting',
}, {
	'nombre': 'Trescha',
	'apellido': 'Shoulders',
	'correo': 'tshoulders9@rambler.ru',
	'tipo': 'Training',
}, {
	'nombre': 'Kimberlee',
	'apellido': 'Moyse',
	'correo': 'kmoysea@who.int',
	'tipo': 'Product Management',
}, {
	'nombre': 'Nobie',
	'apellido': 'Radley',
	'correo': 'nradleyb@bing.com',
	'tipo': 'Business Development',
}, {
	'nombre': 'Faustine',
	'apellido': 'Heakey',
	'correo': 'fheakeyc@arizona.edu',
	'tipo': 'Research and Development',
}, {
	'nombre': 'Giffard',
	'apellido': 'Worral',
	'correo': 'gworrald@fda.gov',
	'tipo': 'Research and Development',
}, {
	'nombre': 'Adoree',
	'apellido': 'Wesgate',
	'correo': 'awesgatee@tripadvisor.com',
	'tipo': 'Legal',
}, {
	'nombre': 'Matilda',
	'apellido': 'Yendle',
	'correo': 'myendlef@amazonaws.com',
	'tipo': 'Business Development',
}, {
	'nombre': 'Bengt',
	'apellido': 'Sevitt',
	'correo': 'bsevittg@bloglovin.com',
	'tipo': 'Sales',
}, {
	'nombre': 'Ring',
	'apellido': 'Gainseford',
	'correo': 'rgainsefordh@privacy.gov.au',
	'tipo': 'Engineering',
}, {
	'nombre': 'Sonnie',
	'apellido': 'Cattermole',
	'correo': 'scattermolei@columbia.edu',
	'tipo': 'Training',
}, {
	'nombre': 'Benita',
	'apellido': 'Langthorne',
	'correo': 'blangthornej@ifeng.com',
	'tipo': 'Human Resources',
}, {
	'nombre': 'Amble',
	'apellido': 'Stanlike',
	'correo': 'astanlikek@sun.com',
	'tipo': 'Support',
}, {
	'nombre': 'Chrissy',
	'apellido': 'Martusov',
	'correo': 'cmartusovl@gmpg.org',
	'tipo': 'Training',
}, {
	'nombre': 'Merrilee',
	'apellido': 'Boles',
	'correo': 'mbolesm@chronoengine.com',
	'tipo': 'Business Development',
}, {
	'nombre': 'Curtice',
	'apellido': 'Yakhin',
	'correo': 'cyakhinn@tmall.com',
	'tipo': 'Human Resources',
}, {
	'nombre': 'Cammy',
	'apellido': 'Domnin',
	'correo': 'cdomnino@springer.com',
	'tipo': 'Sales',
}, {
	'nombre': 'Chiarra',
	'apellido': 'Osipenko',
	'correo': 'cosipenkop@booking.com',
	'tipo': 'Product Management',
}, {
	'nombre': 'Jania',
	'apellido': 'Scapens',
	'correo': 'jscapensq@nytimes.com',
	'tipo': 'Marketing',
}, {
	'nombre': 'Nealon',
	'apellido': 'Rogan',
	'correo': 'nroganr@gmpg.org',
	'tipo': 'Legal',
}, {
	'nombre': 'Theresita',
	'apellido': 'Wandrich',
	'correo': 'twandrichs@myspace.com',
	'tipo': 'Training',
}, {
	'nombre': 'Jourdan',
	'apellido': 'Vinter',
	'correo': 'jvintert@mac.com',
	'tipo': 'Business Development',
}, {
	'nombre': 'Gretta',
	'apellido': 'Guidelli',
	'correo': 'gguidelliu@home.pl',
	'tipo': 'Legal',
}, {
	'nombre': 'Delia',
	'apellido': 'Treacher',
	'correo': 'dtreacherv@surveymonkey.com',
	'tipo': 'Research and Development',
},
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
			<ModalContext.Provider value={{ visible, setVisible }}>
				<ModalComponent/>
			</ModalContext.Provider>
		</>
	);
};

export default PDocentes;