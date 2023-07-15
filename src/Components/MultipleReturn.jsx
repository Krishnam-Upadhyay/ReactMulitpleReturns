import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/Krishnam-Upadhyay';
const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user1 = await response.json();
        setUser(user1);
        console.log(user1);
      } catch (error) {
        setIsError(true);
        console.log('error' + error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <h1>Ther is an error </h1>;
  } else {
    return (
      <div>
        <img
          src={user.avatar_url}
          style={{ width: '300px', borderRadius: '20px' }}
        />
        <h2>Name : {user.name}</h2>
        <h3>Bio: {user.bio}</h3>
        <h3>Login Profile: {user.received_events_url}</h3>
      </div>
    );
  }
};

export default MultipleReturn;
