import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import { CardLogic } from "./pages/CardDetails";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";
import { MoreLogic } from "./pages/MoreLogic";
import SideNav from "./components/SideNav";
import GeneralComp from "./pages/GeneralComp";
import Bookroutes from "./pages/Cardroutes";
import Cardroutes from "./pages/Cardroutes";
import BeforeUseReducerEg from "./pages/useReducer/BeforeUseReducerEg";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* before */}
        {/* <Route path="/" element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} /> */}

        {/* shared component */}
        <Route element={<GeneralComp />}>
          <Route path="/" element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="usered" element={<BeforeUseReducerEg />} />
        </Route>

        {/* <Route path="cards" element={<SideNav />}> */}
        {/* index helps us create an homepage for our subroutes */}
        {/* <Route index element={<ContactUs />} />
          <Route path="new" element={<MoreLogic />} />
          <Route path=":singlecard" element={<CardLogic />} /> */}
        <Route path="cards/*" element={<Cardroutes />}></Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;

// EXTERNAL RESOURCE
// https://blog.webdevsimplified.com/2022-07/react-router/
