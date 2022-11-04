import LocalStore from '../../store/localStore';

export const login = async (API_URL, email, password) => {
  const response = await fetch(`${API_URL}/users/sign_in`, {
    method: 'POST',
    body: JSON.stringify({
      user: {
        email,
        password
      }
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();
  const token = response.headers.get('Authorization');
  if (token) {
    LocalStore.save('token', token);
  }
  return result;
};

export const register = async (API_URL, name, email, password) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    body: JSON.stringify({
      user: {
        name,
        email,
        password,
        password_confirmation: password
      }
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();
  const token = response.headers.get('Authorization');
  if (token) {
    LocalStore.save('token', token);
  }
  return result;
};

export const logout = async (API_URL) => {
  const token = LocalStore.get('token');
  const response = await fetch(`${API_URL}/users/sign_out`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: token
    }
  });
  const result = await response.json();
  if (response.ok) {
    LocalStore.remove('token');
  }
  return result;
};
