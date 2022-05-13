import React from "react";
import { useEffect, useState } from "react";

const Cards = () => {
  const [users, setUsers] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setUsers(await response.json());
  };
  useEffect(() => {
    getPosts();
  }, []);

  return users.map((currElem) => {
    return (
      <div className="card">
        <div className="image-holder">
          <img src="https://source.unsplash.com/300x225/?wave" alt="wave" />
          <div className="card-title">
            <h2>Title: {currElem.title}</h2>
          </div>
          <div className="card-body">
            <p>
              <b>Body:</b> {currElem.body}
            </p>
          </div>
        </div>
        <footer className="card-footer">
          <h2 className="card-userid">UserId:{currElem.userId}</h2>
          <h2 className="card-id">Id:{currElem.id}</h2>
        </footer>
      </div>
    );
  });
};

export default Cards;
