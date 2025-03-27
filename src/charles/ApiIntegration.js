import { useState } from "react";

export const ApiIntegration = () => {
    const [token, setToken] = useState('');

  const fetchToken = async () => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/auth/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST', //Save
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'john@mail.com',
          password: 'changeme',
        }),
      });
      const data = await response.json();
      setToken(data.access_token);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const fetchAPI = async () => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/auth/profile';

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchToken}>Get Token</button> <br />
      <button onClick={fetchAPI}>Make API Call</button>
    </div>
  );
}