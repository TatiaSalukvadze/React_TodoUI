import React from "react";
import "./List.css";
import trash from "../../images/trash-icon.svg";
import tichka from "../../images/tichka.png";
import circle from "../../images/circle.svg";

function List({ arr, setArr }) {
  function delEl(ind) {
    setArr([...arr.slice(0, ind), ...arr.slice(ind + 1)]);
  }

  const items = arr.map((el, ind) => {
    const t = el.time
      .toLocaleDateString([], {
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
      .split(" ");
    t[1] = "at " + t[1];

    const calc = (times) => {
      return times.toLocaleDateString([], {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };
    if (calc(el.time) === calc(new Date())) {
      t[0] = "Today";
    }
    // t.join(" ");
    return (
      <div key={el.text + ind} className="item">
        <div className="textwtime">
          <p className="text">{el.text}</p>

          <p className="time">{t.join(" ")}</p>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              setArr([
                ...arr.slice(0, ind),
                { text: el.text, comp: !el.comp, time: el.time },
                ...arr.slice(ind + 1),
              ]);
              console.log(el.comp);
            }}
          >
            <img src={el.comp ? tichka : circle} />
          </button>
          <button onClick={() => delEl(ind)}>
            <img src={trash} />
          </button>
        </div>
      </div>
    );
  });
  return <div className="list">{items}</div>;
}

export default List;
