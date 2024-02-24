import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SubMenu from "./components/SubMenu/SubMenu";
import MainBody from "./components/MainBody/MainBody";
import API from "./Services/GlobalApi";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import SignInModal from "./components/SignInModal/SignInModal";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const [showSideBar, setShowSideBar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // using Async Await
  const getMyPostData = async () => {
    try {
      setLoading(true);
      const res = await API.get();
      setMyData(res.data.data);
      setLoading(false);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);
 
  
  useEffect(() => {
    window.innerWidth > 1024 ? setShowSideBar(true) : setShowSideBar(false);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setShowSideBar(true); // Show sidebar by default if screen width > 1024px
      } else {
        setShowSideBar(false); // Hide sidebar by default if screen width <= 1024px
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };

  const handelSignUp = () => {
    return setShowSignUpModal(true);
  };

  const handleSignIn = () => setShowSignInModal(true);

  const handleShowSideBar = () => setShowSideBar(!showSideBar)

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      setShowSignUpModal(false);
      setShowSignInModal(false);
      
    }
    if(e.target.id === "container_sidebar"){
      setShowSideBar(false)
    }
  };

  return (
    <>
      <SideBar showSideBar={showSideBar} handleOnClose={handleOnClose}/>
      <div className={showSideBar === true ? "ml-0 mt-6 px-2 lg:ml-[210px] md:px-4 lg:mt-6 lg:px-10": 'ml-0 mt-6 px-2 md:px-4 lg:px-10'}>
        <Header handelSignUp={handelSignUp} handleSignIn={handleSignIn} showSideBar={showSideBar} handleShowSideBar={handleShowSideBar} />

        <Banner />
        <SubMenu />
        {loading ? (
          <p className="text-white">Loading....</p>
        ) : (
          <MainBody data={myData} />
        )}
      </div>
      {showSignUpModal && <SignUpModal handleOnClose={handleOnClose} />}
      {showSignInModal && <SignInModal handleOnClose={handleOnClose} />}
    </>
  );
}

export default App;
