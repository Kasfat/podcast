import { useEffect, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import SubMenu from './components/SubMenu/SubMenu'
import MainBody from './components/MainBody/MainBody'
import API from './Services/GlobalApi'
import SignUpModal from './components/SignUpModal/SignUpModal'



function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

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

const handelSignUp = ()=>{
  return setShowSignUpModal(true);
}

const handleOnClose = (e) => {
  if(e.target.id === "container")
  setShowSignUpModal(false);
}



  return (
    <>
      <SideBar/>
      
      <div className='ml-[210px] mt-6 px-10'>
      <Header handelSignUp = {handelSignUp} />
      {showSignUpModal && <SignUpModal handleOnClose = {handleOnClose}/>}
      
      <Banner/>
      <SubMenu/>
      { loading ? (<p className='text-white'>Loading....</p>): <MainBody data={myData}/>}
      
      </div>
        
    </>
  )
}

export default App
