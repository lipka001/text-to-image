import React, { FC } from "react";

import useConverter from "./Hooks/useConverter";
import b from "./Utils/block";

const Converter: FC = () => {
  const [value, base64, handleChange, handleSubmit] = useConverter();

  return (
    <div className={b("wrapper")}>
      <h1 className={b("header")}>Convert Text To Image</h1>
      <form
        className={b("container")}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label
          className={b("label")}
          htmlFor="text"
        >
          Write your text here
          <input
            className={b("input")}
            id="text"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </label>
        <button
          className={b("btn")}
          type="submit"
        >
          Convert
        </button>
      </form>
      {base64 && (
        <img
          className={b("image")}
          src={`data:image/jpeg;base64,${base64}`}
          alt="TextToImage"
        />
      )}
    </div>
  );
};

export default Converter;
