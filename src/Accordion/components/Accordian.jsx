import React, { useState } from "react";

import data from "./data.js";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <>
      <div className="wrapper">
        <div className="wrapper__accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="wrapper__item" key={dataItem.id}>
                <div
                  className="wrapper__title"
                  onClick={() => handleSingleSelection(dataItem.id)}
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id && (
                  <div
                    className="wrapper__content"
                    onClick={() => handleSingleSelection(dataItem.id)}
                  >
                    {dataItem.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>No data found!!!</div>
          )}
        </div>
      </div>
    </>
  );
}
