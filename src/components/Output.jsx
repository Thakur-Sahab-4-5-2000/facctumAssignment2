import React from "react";
import { useSelector } from "react-redux";
import "../css/output.css";

const Ouput2 = () => {
  const birth = useSelector((store) => store.birth);
  const handleClick = (e) => {
    window.location.reload();
  };
  return (
    <div className="output">
      <div className="head1">
        <h1>Output</h1>
      </div>
      {birth.birth.length > 0 ||
      birth.keyword.length > 0 ||
      birth.institue.length > 0 ||
      birth.mentor.length ||
      birth.skills.length ||
      birth.capitals.length ? (
        <button onClick={handleClick} className="tryAgain">
          Try Again
        </button>
      ) : null}

      {birth.birth.length > 0 && <h3>Birth</h3>}
      <ul>
        {birth.birth.map((item, index) => (
          <li key={index}>
            Birth Place {index + 1}: <b>{item.service}</b>
          </li>
        ))}
      </ul>
      {birth.keyword.length > 0 && <h3>Keyword</h3>}
      <ul>
        {birth.keyword.map((item, index) => (
          <li key={index}>
            Keyword {index + 1}: <b>{item.service}</b>
          </li>
        ))}
      </ul>

      {birth.institue.length > 0 && <h3>Institute</h3>}
      <ul>
        {birth.institue.map((item, index) => (
          <li key={index}>
            Institute {index + 1}: <b>{item.service}</b>
          </li>
        ))}
      </ul>

      {birth.mentor.length > 0 && <h3>Mentor</h3>}
      <ul>
        {birth.mentor.map((item, index) => (
          <li key={index}>
            Mentor {index + 1}: <b>{item.service}</b>
          </li>
        ))}
      </ul>

      {birth.skills.length > 0 && <h3>Skills</h3>}
      <ul>
        {birth.skills.map((item, index) => (
          <li key={index}>
            Skill {index + 1}: <b>{item.service}</b>
          </li>
        ))}
      </ul>

      {birth.capitals.length > 0 && <h3>Capitals</h3>}
      <ul>
        {birth.capitals.map((item, index) => (
          <li key={index}>
            Capitals {index + 1}: <b>{item.service}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ouput2;
