import React from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const data = {
    name: "abhishek",
    email: "aabhishek@gmail.com",
  };

  const data2 = {
    name: "abhishek",
    email: "aabhishek@gmail.com",
    password: "@1636527ghah vzhsghhhhfsxfxsghvzgszjgcsvzgvcgzvv",
  };
  const dispatch = useDispatch();

  return (
    <>
      <div>its abhishek </div>
      <h1>Singh</h1>
      <button
        onClick={() =>
          {
          dispatch({
            type: "register",
            payload: data,
          });
          dispatch({
            type:'form',
            payload:data2
          })
        }
      }
      >
        click{" "}
      </button>



    </>
  );
};

export default App;
