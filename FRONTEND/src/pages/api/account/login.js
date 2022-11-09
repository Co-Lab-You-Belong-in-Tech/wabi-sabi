import cookie from 'cookie';
import API_URL from '../../../config/index';

export default async (request, response) => {
  if (request.method === 'POST') {
    const { email, password } = request.body;
    try {
      const apiResponse = await fetch(`${API_URL}/users/sign_in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });

      const data = await apiResponse.json();

      if (apiResponse.ok) {
        response.setHeader('Set-Cookie', [
          cookie.serialize('access', data.access, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60,
            sameSite: 'strict',
            path: '/api/',
          }),
          cookie.serialize('refresh', data.refresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 2,
            sameSite: 'strict',
            path: '/api/',
          }),
        ]);

        return response.status(apiResponse.status).json({
          success: 'Logged in successfully',
        });
      }
      return response.status(apiResponse.status).json({
        error: 'Invalid username or password',
      });
    } catch (error) {
      return response.status(500).json(error);
    }
  } else {
    response.setHeader('Allow', ['POST']);
    return response
      .status(405)
      .json({ error: `Method ${request.method} not allowed` });
  }
};
