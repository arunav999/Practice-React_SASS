import React, { useState } from "react";

import data from "./data.js";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className={enableMultiSelection ? "selected" : null}
        >
          Enable Multi Selection{enableMultiSelection && ": Enabled"}
        </button>
        <div className="wrapper__accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="wrapper__item" key={dataItem.id}>
                <div
                  className="wrapper__title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>

                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div
                        className="wrapper__content"
                        onClick={
                          enableMultiSelection
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)
                        }
                      >
                        {dataItem.answer}
                      </div>
                    )
                  : selected === dataItem.id && (
                      <div
                        className="wrapper__content"
                        onClick={() => handleSingleSelection(dataItem.id)}
                      >
                        {dataItem.answer}
                      </div>
                    )}

                {/* {selected === dataItem.id && (
                  <div
                    className="wrapper__content"
                    onClick={() => handleSingleSelection(dataItem.id)}
                  >
                    {dataItem.answer}
                  </div>
                )} */}
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
