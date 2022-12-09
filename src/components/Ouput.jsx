import React from "react";
import { useSelector } from "react-redux";
import "../css/output.css";

const Ouput = () => {
  const birth = useSelector((store) => store.birth);
  const keyword = useSelector((store) => store.keyword);
  const institute = useSelector((store) => store.institute);
  const handleClick = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <div className="output">
      <div className="head">
        <h1>Output</h1>
      </div>
      {birth.length > 0 || keyword.length > 0 || institute.length > 0 ? (
        <button onClick={handleClick}>Try Again</button>
      ) : null}

      {birth.length > 0 && <h3>Birth</h3>}
      <ul>
        {birth.map((item, index) => (
          <li key={index}>
            Birth Place {index + 1}: <b>{item.service}</b>
          </li>
        ))}
      </ul>
      {keyword.length > 0 && <h3>Keyword</h3>}
      <ul>
        {keyword.map((item, index) => (
          <li key={index}>
            Keyword {index + 1}: <b>{item.service}</b>
          </li>
        ))}
      </ul>

      {institute.length > 0 && <h3>Institute</h3>}
      <ul>
        {institute.map((item, index) => (
          <li key={index}>
            Institute {index + 1}: <b>{item.service}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ouput;
