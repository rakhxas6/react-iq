import React, { useState, useCallback, useEffect, useRef } from "react";
import "./Password.css";

const Password = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let passwordGenerated = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      passwordGenerated += str.charAt(char);
    }
    setPassword(passwordGenerated);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 24);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="password-container">
        <input
          type="text"
          placeholder="Your generated password"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyToClipboard}>Copy</button>
      </div>

      <div className="options-container">
        <div className="option">
          <input
            type="range"
            min={6}
            max={24}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>

        <div className="option">
          <input
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="option">
          <input
            type="checkbox"
            id="charInput"
            checked={characterAllowed}
            onChange={() => setCharacterAllowed(!characterAllowed)}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default Password;


//callback le memorize garxa function purai wa jati chaihinxa teti
//useRef reference liuxa kunai pani data yo case ma password ko leiyera
// page load huda first time ma useEffect ko function call hunxa