import styled from 'styled-components';
import { colors } from 'public/theme';
import { useState } from 'react';
import { Form, Formik, Field } from 'formik';

const Close = styled.button`
border: none;
background: none;
margin-right: 20px;
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

const SForm = styled(Form)`
display: flex;
flex-direction: column;
flex: 0.8;
`;

const Title = styled.h1`
font-size: 2.2rem;
margin-bottom: 2rem;
`;

const Label = styled.label`
margin-bottom: 0.2rem;
font-size: 1.4rem;
`;

const SField = styled(Field)`
width: 18rem;
height: 1.8rem;
margin-bottom: 2rem;
`;

const SendButton = styled.button`
width: 10rem;
height: 2.6rem;
font-size: 15px; 
position: absolute;
bottom: 20%;
right: 24%;
border: 0;
border-radius: 6px;
background-color: ${colors.secundario};
color: white;

&:hover{
  cursor: pointer;
  background-color: #45D583;
}

&:active{
  background-color: ${colors.secundario};
  opacity: 0.75;
}
`;

const ModalComponent = ({ showModal }) => {
	const [visible, setVisible] = useState(showModal);
	return (
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
							correo: '',
							tipo: '--elegir--',
						}}
						onSubmit = { (values) => {
							alert(JSON.stringify(values));
						}}
					>
						<SForm>
							<Title>Información personal</Title>
							<Label>Nombre</Label>
							<SField autocomplete="off" name='nombre' type='text'></SField>
							<Label>Apellidos</Label>
							<SField autocomplete="off" name='apellido' type='text'></SField>
							<Label>Correo Institucional</Label>
							<SField autocomplete="off" name='correo' type='text'></SField>
							<Label>Tipo</Label>
							<SField name='tipo' component='select'>
								<option value="--elegir--">--elegir--</option>
								<option value="Director">Director</option>
								<option value="Profesor">Profesor</option>
								<option value="Administrativo">Administrativo</option>
								<option value="Miscelanio">Miscelanio</option>
							</SField>
							<SendButton type='submit'>Guardar</SendButton>
						</SForm>
					</Formik>
				</MainDiv>
			</ModalContent>
		</Modal>
	);
};

module.exports = ModalComponent;