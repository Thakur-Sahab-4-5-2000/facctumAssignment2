import { useState } from "react";
import "../css/hybrid.css";

function Hybrid({ title, placeholder, handleServiceDispatch }) {
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const [alert, setAlert] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <>
      <form className="hybird" autoComplete="off">
        <div className="form-field">
          <h3 className="title">{title}</h3>
          {alert === true ? <pre>All fields are required</pre> : null}
          {serviceList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <input
                  name="service"
                  type="text"
                  id="service"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      for (let i = 0; i < serviceList.length; i++) {
                        if (serviceList[i].service === "") {
                          setAlert(true);
                          return;
                        }
                      }
                      setAlert(false);
                      handleServiceDispatch(serviceList, title, setFlag);
                    }
                  }}
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
                    <span>X</span>
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {serviceList.length < 4 && flag === false ? (
          <button type="button" onClick={handleServiceAdd} className="add-btn">
            <span>+ Add</span>
          </button>
        ) : (
          <button type="button" className="add-btn-submitted">
            <span>+ Add</span>
          </button>
        )}
      </form>
    </>
  );
}

export default Hybrid;
