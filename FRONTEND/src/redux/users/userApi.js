import storage from "../store/localStore";

export const signin = async (baseURL, email, password) => {
  const response = await fetch(`${baseURL}/users/sign_in`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const result = await response.json();
  const token = response.headers.get('Authorization');
  if (token) {
    storage.save('token', token);
    storage.save('name', result.name);
  }
  return result;
};

export const signup = async (baseURL, name, email, password, confirmation) => {
  const response = await fetch(`${baseURL}/users`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: {
          name,
          email,
          password,
          password_confirmation: confirmation,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const result = await response.json();
  const token = response.headers.get('Authorization');
  if (token) {
    storage.save('token', token);
    storage.save('name', result.name);
  }
  return result;
};
