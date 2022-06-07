import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Home = ({ users }) => {
  const router = useRouter();

  console.log("next js core router hook ::", router);

  return (
    <div>
      <div
        style={{
          width: "60%",
          border: "1px solid salmon",
          padding: "10px",
          borderRadius: "10px",
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        <h2>Index Page</h2>
      </div>

      {users &&
        users.map((user) => (
          <div
            key={user.id}
            style={{
              width: "60%",
              border: "1px solid salmon",
              padding: "20px",
              borderRadius: "10px",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            <h3>Name : {user.name}</h3>
            <h5>Email : {user.email}</h5>
            <h5>Phone : {user.phone}</h5>
          </div>
        ))}
    </div>
  );
};

// prerendering
export const getServerSideProps = async (context) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/");

  return {
    props: { users: res.data },
  };
};

export default Home;
