import "./App.css";
import "./components/Hybrid";
import Hybrid from "./components/Hybrid";
import Ouput from "./components/Output";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import Output2 from "./components/Output2";
import { useDispatch } from "react-redux";
import { addBirth } from "./utils/birthSlice";
import { Loader, Placeholder } from "rsuite";

function App() {
  const [flag, setFlag] = useState(false);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const birth = useSelector((state) => state.birth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8000/api/get");
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setFlag(true);
  };

  const handleServiceDispatch = (serviceList, title, setFlag) => {
    if (title === "Birth") {
      // dispatch(addBirth(serviceList));
      dispatch(addBirth({ key: "birth", data: [...serviceList] }));
      setFlag(true);
      return;
    } else if (title === "Keyword") {
      // dispatch(addkeyword(serviceList));
      dispatch(addBirth({ key: "keyword", data: [...serviceList] }));
      setFlag(true);
      return;
    } else if (title === "Institue") {
      // dispatch(addInstitue(serviceList));
      dispatch(addBirth({ key: "institue", data: [...serviceList] }));
      setFlag(true);
      return;
    } else if (title === "Mentor") {
      // dispatch(addMentor(serviceList));
      dispatch(addBirth({ key: "mentor", data: [...serviceList] }));
      setFlag(true);
      return;
    } else if (title === "Capitals") {
      // dispatch(addCapitals(serviceList));
      dispatch(addBirth({ key: "capitals", data: [...serviceList] }));
      setFlag(true);
      return;
    } else {
      // dispatch(addSkills(serviceList));
      dispatch(addBirth({ key: "skills", data: [...serviceList] }));
      setFlag(true);
      return;
    }
  };

  return (
    <div className="App">
      <h1 className="assg">Assignment 2</h1>
      <div>
        {loading ? (
          <div>
            <Placeholder.Paragraph rows={8} />
            <Loader backdrop content="loading..." vertical />
          </div>
        ) : (
          <div className="list">
            {list.map((item) => (
              <Hybrid
                key={item._id}
                title={item.title}
                placeholder={item.placeholder}
                handleServiceDispatch={handleServiceDispatch}
              />
            ))}
          </div>
        )}
      </div>

      {flag === true &&
      birth?.birth?.length > 0 &&
      birth?.keyword?.length > 0 &&
      birth?.institue?.length > 0 &&
      birth?.mentor?.length &&
      birth?.skills?.length &&
      birth?.capitals?.length ? (
        <button className="buttonSubmitted">Submitted</button>
      ) : flag === false &&
        birth?.birth?.length > 0 &&
        birth?.keyword?.length > 0 &&
        birth?.institue?.length > 0 &&
        birth?.mentor?.length > 0 &&
        birth?.skills?.length > 0 &&
        birth?.capitals?.length > 0 ? (
        <button className="button" onClick={handleClick}>
          Submit
        </button>
      ) : flag === false &&
        (birth?.birth?.length === 0 ||
          birth?.keyword?.length === 0 ||
          birth?.institue?.length === 0 ||
          birth?.mentor?.length === 0 ||
          birth?.skills?.length === 0 ||
          birth?.capitals?.length === 0) ? (
        <button className="submitDisable" disabled>
          Submit
        </button>
      ) : null}

      <div className="output">{flag === true ? <Ouput /> : <Output2 />}</div>
    </div>
  );
}

export default App;
