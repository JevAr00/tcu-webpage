import Personal from 'utils/db/models/personal';
import conectarDB from 'utils/db/dbConnect';


export default async function handler1(req, res) {


	// DB Connect
	await conectarDB();

	// Get method


	try {
		const personal = await Personal.find();

		res.status(200).json(personal);
	}
	catch (err) {
		res.status(500).json(err);
	}


}