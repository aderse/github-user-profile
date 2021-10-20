import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/aderse`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if(loading) return <h1>Loading...</h1>
  if(error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  if(!data) return null;
  console.log(data);
  return (
    
    <div className="App">
      <img alt={data.login} src={data.avatar_url} />
      <div className="info">
        <h1>{data.name}</h1>
        <p className="location">Location: {data.location}</p>
      </div>
      <div className="bio">
        <p>{data.bio}</p>
      </div>
      <ul className="social">
          <li>
            <a href="https://www.andrewderse.com">
              <img src="/img/social-web.svg" alt="Andrew Derse - Website" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/andrew.derse.7">
              <img src="/img/social-fb.svg" alt="Andrew Derse - Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/andrewderse/">
              <img src="/img/social-ig.svg" alt="Andrew Derse - Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andrew-derse-56692235/">
              <img src="/img/social-li.svg" alt="Andrew Derse - LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/aderse">
              <img src="/img/social-gh.svg" alt="Andrew Derse - GitHub" />
            </a>
          </li>
        </ul>
    </div>
  );
}

export default App;
