import React, { useState } from "react";
const App = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [allentry, setallentry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      const newentry = { id: new Date().getTime().toString(), email, password };

      setallentry([...allentry, newentry]);
      setemail("");
      setpassword("");
    } else {
      alert("please fill the following details");
    }
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div className="main">
          <div>
            <label htmlFor="email">
              Email
              <br />
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">
              Password
              <br />
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="showdetail">
        {allentry.map((currElm) => {
          return (
            <div key={currElm.id} className="show detail">
              <p>{currElm.email}</p>
              <p>{currElm.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default App;
