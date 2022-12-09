import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBirth } from "../utils/birthSlice";
import { addkeyword } from "../utils/keywordSlice";
import { addInstitue } from "../utils/institueSlice";
import "../css/hybrid.css";

function Hybrid({ title, placeholder }) {
  const [lengthInput, setLengthInput] = useState(0);
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (title === "Birth") {
      dispatch(addBirth(serviceList));
      setFlag(true);
    } else if (title === "Keyword") {
      dispatch(addkeyword(serviceList));
      setFlag(true);
    } else {
      dispatch(addInstitue(serviceList));
      setFlag(true);
    }
  };
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    let len = value;
    setLengthInput(len.length);
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setLengthInput(list.length);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
    setLengthInput(0);
  };

  return (
    <>
      <form className="hybird" autoComplete="off">
        <div className="form-field">
          <h3 className="title">{title}</h3>
          {serviceList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <input
                  name="service"
                  type="text"
                  id="service"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  placeholder={placeholder}
                  required
                />
              </div>

              <div className="second-division">
                {serviceList.length !== 1 && flag === false ? (
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {serviceList.length < 4 && flag == false ? (
          <button type="button" onClick={handleServiceAdd} className="add-btn">
            <span>+ Add</span>
          </button>
        ) : (
          <button type="button" className="add-btn-submitted">
            <span>+ Add</span>
          </button>
        )}
      </form>
      {flag === false && lengthInput > 0 ? (
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      ) : flag === true ? (
        <button className="submitted" disabled>
          Submited
        </button>
      ) : null}
    </>
  );
}

export default Hybrid;
