import { useState } from "react";
import "./styles.css";

export default function App() {
  const [expression, SetVal] = useState("");
  const setValue = (value) => SetVal(expression + value);
  const handleClick = (e) => {
    e.preventDefault();
    switch (e.target.headers.trim()) {
      case "C":
        SetVal("");
        break;
      case "=":
        try {
          SetVal(eval(expression));
        } catch {
          SetVal("Undefined");
        }
        break;
      case "inv":
        SetVal(-expression);
        break;
      default:
        setValue(e.target.innerHTML.trim());
    }
  };

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td
              colSpan={4}
              style={{
                backgroundColor: "LightGray",
                height: "30px"
              }}
            >
              <input
                id="output"
                value={expression}
                style={{ textAlign: "center" }}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td
              headers={"C"}
              colSpan={3}
              style={{ backgroundColor: "orange" }}
              onClick={handleClick}
            >
              Clear
            </td>
            <td headers={"/"} onClick={handleClick}>
              /
            </td>
          </tr>
          <tr>
            <td headers={"7"} onClick={handleClick}>
              7
            </td>
            <td headers={"8"} onClick={handleClick}>
              8
            </td>
            <td headers={"9"} onClick={handleClick}>
              9
            </td>
            <td headers={"*"} onClick={handleClick}>
              *
            </td>
          </tr>
          <tr>
            <td headers={"4"} onClick={handleClick}>
              4
            </td>
            <td headers={"5"} onClick={handleClick}>
              5
            </td>
            <td headers={"6"} onClick={handleClick}>
              6
            </td>
            <td headers={"-"} onClick={handleClick}>
              -
            </td>
          </tr>
          <tr>
            <td headers={"1"} onClick={handleClick}>
              1
            </td>
            <td headers={"2"} onClick={handleClick}>
              2
            </td>
            <td headers={"3"} onClick={handleClick}>
              3
            </td>
            <td headers={"+"} onClick={handleClick}>
              +
            </td>
          </tr>
          <tr>
            <td headers={"inv"} onClick={handleClick}>
              -/+
            </td>
            <td headers={"0"} onClick={handleClick}>
              0
            </td>
            <td headers={"."} onClick={handleClick}>
              .
            </td>
            <td headers={"="} onClick={handleClick}>
              =
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
