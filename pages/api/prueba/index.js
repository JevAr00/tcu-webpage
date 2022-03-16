import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function rutaPrueba(req, res) {
	const { user } = getSession(req, res);
	res.json({ protected: 'My Secret', nombre: user.nickname });
});