// USESTATE CODE

// import React, { useEffect, useState } from "react";

// const BeforeUseReducerEg = () => {
//   const [input, setInput] = useState("");
//   const [count, setCount] = useState(0);
//   const [textColor, setTextColor] = useState(true);
//   const [showHide, setShowHide] = useState(true);

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   //   const increment = () => {
//   //     // setCount(count + 1);
//   //   };

//   const decrement = () => {
//     setCount((prevCount) => {
//       if (prevCount >= 0) {
//         return prevCount - 1;
//       } else {
//         return 0;
//       }
//     });
//   };

//   const increment = () => {
//     setTimeout(() => {
//       // here we call our setValue
//       // setCount(count + 1);

//       // the problem here[setValue(value + 1);] is that when you click multiple times, the counter only increases once. This is because every time it is clicked, it thinks that the state value is the old value(0, 1 or whatever the counter had been before).
//       // Basically, the set functions(in this case, setValue) are asynchronous. So we need to get the previous value clicked before increasing the counter using the functional approach.
//       // Instead of passing in that new value that we would want, we pass in that new function. what happens is that as a parameter it gets that old state value(prevState[conventional method] or preValue if you like) right before the update. The most important thing is that it gets the current value(prevState), which is the one right before the update not the one called 2secs ago(value).
//       // this method can be used in all our previous examples(useStateEg, useStateArrays) but not necessarily but in this case, it is a must.
//       // setValue((prevState) => {
//       //   return prevState + 1;
//       // });

//       setCount((prevCount) => {
//         return prevCount + 1;
//       });
//     }, 2000);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   // const showText = () => {
//   //   setShowHide(!showHide);
//   // };

//   const changeColor = () => {
//     setTextColor((prevColor) => {
//       return !prevColor;
//     });
//   };

//   return (
//     <div>
//       <input type="text" value={input} onChange={handleChange} />

//       <h2>Count: {count}</h2>

//       <div>
//         <button onClick={increment}>Increase</button>
//         <button onClick={decrement}>Decrease</button>
//         <button
//           onClick={() => {
//             setCount(0);
//             setShowHide(!showHide);
//           }}
//         >
//           Reset
//         </button>
//       </div>

//       <div>
//         {/* <div style={{ color: textColor ? "black" : "blue" }}> */}
//         <h2>UserInput: {input}</h2>
//         {showHide && <p>The counter has been reset</p>}

//         <div style={{ color: textColor ? "black" : "blue" }}>Hi</div>

//         <button onClick={changeColor}>Change Color</button>
//       </div>
//     </div>
//   );
// };

// export default BeforeUseReducerEg;

// REWRITE THE CODE ABOVE TO USEREDUCER

import React, { useEffect, useReducer, useState } from "react";

const BeforeUseReducerEg = () => {
  const [input, setInput] = useState("");
  // const [count, setCount] = useState(0);
  // const [textColor, setTextColor] = useState(true);
  // const [showHide, setShowHide] = useState(true);

  const initialValues = {
    count: 0,
    textColor: true,
    showHide: true,
  };

  const reducerLogic = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };

      case "decrement":
        return { ...state, count: state.count - 1 };

      case "reset":
        return { count: (state.count = 0) };

      // case "showText":
      //   return { ...state, textColor: !state.textColor };

      case "showHide":
        return { ...state, showHide: !state.showHide };
    }
  };

  const [state, dispatch] = useReducer(reducerLogic, initialValues);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />

      <h2>Count: {state.count}</h2>

      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrease
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
            dispatch({ type: "showHide" });
          }}
        >
          Reset
        </button>
      </div>

      <div>
        {/* <div style={{ color: textColor ? "black" : "blue" }}> */}
        <h2>UserInput: {input}</h2>
        {state.showHide && <p>The counter has been reset</p>}
        {/* 
        <div style={{ color: state.textColor ? "black" : "blue" }}>Hi</div>

        <button onClick={dispatch({ type: "showHide" })}>Change Color</button> */}
      </div>
    </div>
  );
};

export default BeforeUseReducerEg;
