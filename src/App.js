// import { useState } from "react";
import "./App.css";
import API from "./components/API";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import { Navbar } from "./components/Navbar";
import PropTypes from "prop-types";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Navbar></Navbar> */}
      {/* <h1>Happy Hacing</h1>
      <NewComment /> */}
      {/* <Profile username={"Tola"} job_description={"Developer"} />
      <Profile username={"Faith"} job_description={"Designer"} />
      <Profile username={"goMyCode"} job_description={"School"} />
      <Profile username={"Dele"} job_description={"Manager"} />
      <Profile username={"Nigeria"} job_description={"Abuja"} />
      <Profile username={"Tola"} job_description={"Developer"} /> */}
      {/* <ProfileDetails
        user={"Dami"}
        job_title={"farmer"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        ipsum.`}
      />

      <ProfileDetails
        user={"Chidinma"}
        job_title={"Dev"}
        description={`Something great with development`}
      />

      <ProfileDetails
        user={"Uche"}
        job_title={"Banker"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        ipsum.`}
      /> */}

      {/* <SectionStructure /> */}

      {/* <div className="mt-5">
        <Buttons />
      </div> */}
      {/* 
      <div className="mt-5">
        <Forms />
      </div> */}
      {/* <Footer /> */}

      <API />
    </div>
  );
}

const NewComment = () => {
  return (
    <>
      <h1>New Comments</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        ipsum.
      </p>
    </>
  );
};

// props method one
// const Profile = (props) => {
//   return (
//     <div>
//       <h1>{props.username}</h1>
//       <p>{props.job_description}</p>
//     </div>
//   );
// };

// props method two
// const Profile = ({ username, job_description }) => {
//   return (
//     <div>
//       <h1>{username}</h1>
//       <p>{job_description}</p>
//     </div>
//   );
// };

// props method three
// const ProfileDetails = (props) => {
//   const { user, job_title, description } = props;
//   return (
//     <div className="card" style={{ width: "18rem" }}>
//       <div className="card-body">
//         <h5 className="card-title">{user}</h5>
//         <h6 className="card-subtitle mb-2 text-body-secondary">{job_title}</h6>
//         <p className="card-text">{description}</p>
//         <a href="#" className="card-link">
//           Card link
//         </a>
//         <a href="#" className="card-link">
//           Card Link
//         </a>
//       </div>
//     </div>
//   );
// };

// const SectionStructure = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4">
//           <ProfileDetails
//             user={"Dami"}
//             job_title={"farmer"}
//             description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
//         ipsum.`}
//           />
//         </div>

//         <div className="col-md-4">
//           <ProfileDetails
//             user={"Chidinma"}
//             job_title={"Dev"}
//             description={`Something great with development`}
//           />
//         </div>

//         <div className="col-md-4">
//           <ProfileDetails
//             user={"Uche"}
//             job_title={"Banker"}
//             description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
//         ipsum.`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// internal styling
// let styleObj = { width: "18rem", backgroundColor: "blue" };
let styleObj = { width: "18rem" };

const ProfileDetails = (props) => {
  console.log(props);
  const { user, job_title, description, btnName } = props;
  // console.log(props);
  return (
    // <div className="card" style={{ width: "18rem" }}>
    <div className="card" style={styleObj}>
      <div className="card-body">
        <h5 className="card-title">{user}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{job_title}</h6>
        <p className="card-text">{description}</p>
        <p>{props.children}</p>
        {/* <CardBtn btnName={btnName} /> */}
        <CardBtn btnName={btnName} />
      </div>
    </div>
  );
};

ProfileDetails.propTypes = {
  user: PropTypes.string,
  job_title: PropTypes.string,
  description: PropTypes.string,
};

const CardBtn = ({ btnName }) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      // onClick={() => console.log("Hi")}
    >
      {btnName}
    </button>
  );
};

const SectionStructure = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ProfileDetails
            // user={23}
            user={``}
            job_title={"farmer"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        ipsum.`}
            // btnName={`Submit`}
            btnName={`Submit`}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, rem.
          </p>
          {/* <CardBtn btnName={"Submit"} /> */}
        </div>

        <div className="col-md-4">
          <ProfileDetails
            user={"Chidinma"}
            job_title={"Dev"}
            description={`Something great with development`}
            btnName={"Cover"}
          />

          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>

        <div className="col-md-4">
          <ProfileDetails
            user={"Uche"}
            job_title={"Banker"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        ipsum.`}
            btnName={`Go`}
          />
          {/* <CardBtn btnName={"Hide"} /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
