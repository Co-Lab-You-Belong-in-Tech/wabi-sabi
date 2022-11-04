import API_URL from '../../../config/index';

export default async (request, response) => {
  if (request.method === 'POST') {
    const { full_name, email, password } = request.body;
    try {
      const apiResponse = await fetch(`${API_URL}/users/sign_up`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          full_name,

          email,
          password
        })
      });

      const data = await apiResponse.json();

      if (apiResponse.ok) {
        return response.status(201).json(data);
      }
      return response.status(400).json(data);
    } catch (error) {
      return response.status(500).json(error);
    }
  } else {
    response.setHeader('Allow', ['POST']);
    return response.status(405).json({ error: `Method ${request.method} not allowed` });
  }
};
