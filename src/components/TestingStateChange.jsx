import React, { useEffect, useState } from "react";

const TestingStateChange = () => {
  const [loaded, setLoaded] = useState(false);
  const [toggleTextVisible, setToggleTextVisible] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      {loaded && <h3> Page Loaded </h3>}
      {toggleTextVisible && <p> Text visible </p> }
      <button
        onClick={() => {
          setToggleTextVisible(!toggleTextVisible);
        }}
      >
        Toggle text
      </button>
    </div>
  );
};

export default TestingStateChange;
