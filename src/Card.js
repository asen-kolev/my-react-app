import React, { useState, useEffect } from "react";
import "./App.css";
import PropTypes from "prop-types";

// https://api.github.com/users/asenkolev

function Card({ header, login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    console.log(login);
    let user = "/" + String(login);
    let temp = "https://api.github.com/users";
    console.log(temp, user);
    console.log(`https://api.github.com/users/${login}`);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    console.log("data error");
    console.log(<pre>{JSON.stringify(error, null, 2)}</pre>);
  }

  if (data) {
    console.log("data exists", data);
    if (data.login) {
      return (
        <div>
          <h2>{header}</h2>
          <div className="card">
            <img
              alt={data.login}
              src={data.avatar_url}
              style={{ width: "100%" }}
            />
            <div className="container">
              <h4>
                <b>{data.name}</b>
              </h4>
              <p>{data.location}</p>
              <p>{data.email}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{login}</h1>
        </div>
      );
    }
  }

  console.log("Card final return");
  return (
    <div>
      <h1>{login}</h1>
    </div>
  );
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

export default Card;
