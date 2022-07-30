import styled from 'styled-components';
import Image from 'next/image';
import defprof from 'public/img/defaultprofile.jpg';
import { motion } from 'framer-motion';

const CardBody = styled.div`
  text-align: center;
  width: 330px;
  height: 490px;
  margin: 20pt;
  background-color: #fff;
  border-radius: 37px;
`;

const CardTitle = styled.h1`
  padding: 10pt 0 26pt 0;
  font-size: 2.2rem;
  color: #57A6DB;
  font-weight: 500;
`;

const CardName = styled.h2`
  padding-top: 15pt;
  font-size: 1.8rem;
  color: black;
  font-weight: normal;
`;

const CardLastN = styled.h2`
  padding-top: 2pt;
  font-size: 1.4rem;
  color: black;
  font-weight: normal;
`;

const CardMail = styled.h3`
  padding-top: 34pt;
  font-size: 1.2rem;
  color: black;
  font-weight: 400;
`;

const Card = () => {
	return (
		<motion.div>
			<CardBody>
				<CardTitle>Administrativo</CardTitle>
				<Image src={defprof} alt="profile picture" width="194" height="194"/>
				<CardName>Benjamin Fernando</CardName>
				<CardLastN>Hernandez Hernandez</CardLastN>
				<CardMail>benjaminhernadez20@mep.go.cr</CardMail>
			</CardBody>
		</motion.div>
	);
};

export default Card;