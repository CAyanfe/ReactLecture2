import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

// handling few form fields
// const Forms = () => {
//   const [email, setEmail] = useState(123);
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <Form className="w-50 mx-auto border">
//       <div className="p-5">
//         <h2>{email}</h2>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </div>
//     </Form>
//   );
// };

// export default Forms;

// handling form with multiple input
const Forms = () => {
  const [inputs, setInputs] = useState({});

  //   if (isLoading) {
  //     return <h1>Loading...</h1>;
  //   }

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    setInputs((userValues) => ({ ...userValues, [name]: value }));
    // setInputs((userValues) => ({ [name]: value }));
  };

  return (
    <form className="w-50 mx-auto border">
      <div className="p-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Firstname
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="lastname"
            value={inputs.lastname}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            value={inputs.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <h1>{inputs.email}</h1>
          <h1>{inputs.firstname}</h1>
          <h1>{inputs.lastname}</h1>
          <h1>{inputs.message}</h1>
        </div>
      </div>
    </form>
  );
};

export default Forms;
