import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuicyLarson';
const UseEffectFetch = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        console.log(user);
      } catch (error) {
        console.log('error' + error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>Fech Data</h3>
    </section>
  );
};
export default UseEffectFetch;
