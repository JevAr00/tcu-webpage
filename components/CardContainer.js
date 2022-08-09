import axios from 'axios';
import Card from 'components/Card';
import { motion } from 'framer-motion';
import styles from 'styles/Home.module.css';
import { useState, useEffect } from 'react';


const animation_cards = {
	Visible:{ y:50, opacity: 0 },
	noVisible:{ y:0, opacity: 1,
		transition:{ type: 'spring',
			bounce:0.2,
			duration: 1 },
	},
};

const CardContainer = () => {

	const [info, setInfo] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get('api/personal/getPersonal');
			setInfo(data);
		})();
	}, []);

	return (
		<>
			<motion.div className={styles.card_container}
				initial={'Visible'}
				whileInView={'noVisible'}
				viewport={{ once:false, amount: 0.1 }}
				transition={{ staggerChildren: 0.3 }}>

				{
					info.map((item) => (
						<motion.div key={item.idP}
							variants={animation_cards}>
							<Card item={item} />
						</motion.div>
					))
				}

			</motion.div>
		</>
	);

};

export default CardContainer;