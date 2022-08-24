import Personal from 'utils/db/models/personal';
import conectarDB from 'utils/db/dbConnect';

export default async function Get(req, res) {

	// DB Connect
	await conectarDB();

	try {
		const personal = await Personal.find();

		res.status(200).json(personal);
	}
	catch (err) {
		res.status(500).json(err);
	}
}