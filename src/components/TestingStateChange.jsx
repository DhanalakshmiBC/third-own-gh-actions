import React, { useEffect, useState } from "react";

const TestingStateChange = () => {
  const [loaded, setLoaded] = useState(false);
  const [toggleTextVisible, setToggleTextVisible] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false)

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      {loaded && <h3> Page Loaded </h3>}
      {toggleTextVisible && <p> Text visible </p> }
      <button disabled={btnDisabled}
      name="btn1"
        onClick={() => {
          setToggleTextVisible(!toggleTextVisible);
        }}
      >
        Toggle text
      </button>

      <button onClick={() => { setBtnDisabled(!btnDisabled) }}> 
            Toggle button disabled 
        </button>

    </div>
  );
};

export default TestingStateChange;
