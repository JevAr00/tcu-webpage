import axios from 'axios';
import Image from 'next/image';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import defprof from 'public/img/defaultprofile.png';

const CardBody = styled.div`
  width: 330px;
  margin: 20pt;
  height: 490px;
  text-align: center;
  border-radius: 37px;
  background-color: #fff;
`;

const CardTitle = styled.h1`
  color: #57A6DB;
  font-weight: 500;
  font-size: 2.2rem;
  padding: 10pt 0 26pt 0;
`;

const CardName = styled.h2`
  color: black;
  padding-top: 15pt;
  font-size: 1.8rem;
  font-weight: normal;
`;

const CardLastN = styled.h2`
  color: black;
  padding-top: 2pt;
  font-size: 1.4rem;
  font-weight: normal;
`;

const CardMail = styled.h3`
  color: black;
  font-weight: 400;
  padding-top: 34pt;
  font-size: 1.2rem;
`;

const Card = ({ item }) => {

	return (

		<CardBody>
			<CardTitle>{item.tipo}</CardTitle>
			<Image src={defprof} alt="profile picture" width="194" height="194"/>
			<CardName>{item.nombre}</CardName>
			<CardLastN>{item.apellido}</CardLastN>
			<CardMail>{item.correo}</CardMail>
		</CardBody>

	);
};

export default Card;