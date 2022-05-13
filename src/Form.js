import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [userid, setUserId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { userid, id, title, body };
    setIsPending(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log(data);
      setIsPending(false);
      navigate("/");
    });
  };
  return (
    <div className="form">
      <h2>Add a new card</h2>
      <form onSubmit={handleSubmit}>
        <label>UserId:</label>
        <input
          type="number"
          required
          value={userid}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label>Id:</label>
        <input
          type="number"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {!isPending && <button>Add Card</button>}
        {isPending && <button disabled>Card Added!!!</button>}
      </form>
    </div>
  );
};

export default Form;
