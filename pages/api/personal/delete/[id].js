import Personal from 'utils/db/models/personal';
import conectarDB from 'utils/db/dbConnect';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';


export default withApiAuthRequired(async function handler(req, res) {
	const { id } = req.query;

	// DB Connect
	await conectarDB();

	// Post method


	try {

		await Personal.findByIdAndDelete(id);
		res.status(204).json({});

	}
	catch (err) {
		res.status(500).json(err);
	}


});
