import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [errorName, setErrorName] = useState(false);
  let [errorlastName, setErrorLastName] = useState(false);
  let [errorEmail, setErrorEmail] = useState(false);
  let [errorPassword, setErrorPassword] = useState(false);

  let [errorText, setErrorText] = useState("name is rquired");
  let [errorLastNameText, setErrorLastNameText] = useState("last name is rquired");
  let [errorEmailText, setErrorEmailText] = useState("email is rquired");
  let [errorPasswordText, setErrorPasswordText] = useState("password is rquired");

  let [lastname, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  // let [errorName, setErrorName] = useState(false);

  function sendHandler(e) {
    console.log(name, lastname, email, password);
    e.preventDefault();
  }
  function validationHandler() {
    if (name === "") {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
  }
  function lastNameValidationHandler() {
    if (lastname === "") {
      setErrorLastName(true);
    } else {
      setErrorLastName(false);
    }
  }
  function emailValidationHandler() {
    if (email === "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  }
  function passwordValidationHandler() {
    if (password === "") {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  }
  return (
    <div className="App">
      <input
        onBlur={validationHandler}
        // onMouseDown={() => setErrorName(false)}
        className={errorName ? "error" : "textfield"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      {errorName ? <p>{errorText}</p> : ""}
      {/* {name !== '' && setErrorName(true)} */}
      <input
        value={lastname}
        onBlur={lastNameValidationHandler}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="last name"
        // className={errorName ? "error" : "textfield"}
        className={errorlastName ? "error" : "lastNamefield"}
      />
      {errorlastName ? <p>{errorLastNameText}</p> : ""}
      <input
        value={email}
        onBlur={emailValidationHandler}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        // className={errorName ? "error" : "textfield"}
        className={errorEmail ? "error" : "emailfield"}
      />
      {errorEmail ? <p>{errorEmailText}</p> : ""}
      <input
        value={password}
        onBlur={passwordValidationHandler}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        // className={errorName ? "error" : "textfield"}
        className={errorPassword ? "error" : "passwordfield"}
      />
      {errorPassword ? <p>{errorPasswordText}</p> : ""}
      
      <button onClick={sendHandler}>send form</button>
    </div>
  );
}

export default App;
