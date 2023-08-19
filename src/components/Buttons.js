import Button from "react-bootstrap/Button";

const Buttons = () => {
  const handleClick = () => {
    console.log("Hello");
  };

  return (
    <div>
      {/* here, the onclick event happens onload of the page */}
      {/* <button className="btn btn-primary" onClick={console.log("Hi")}>
        Click Me
      </button> */}

      {/* to stop onclick event from happening onload of the page */}
      {/* <button className="btn btn-primary" onClick={() => console.log("Hi")}>
        Click Me
      </button> */}

      {/* put onclick event in a function outside */}
      {/* <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button> */}

      {/* react bootstrap */}
      <Button className="btn btn-success" type="submit" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
};

export default Buttons;
