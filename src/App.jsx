import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import SubMenu from './components/SubMenu/SubMenu'
import MainBody from './components/MainBody/MainBody'
import API from './Services/GlobalApi'



function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

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
  return (
    <>
      <SideBar/>
      <div className='ml-[210px] mt-6 px-10'>
      <Header/>
      <Banner/>
      <SubMenu/>
      { loading ? (<p className='text-white'>Loading....</p>): <MainBody data={myData}/>}
      
      </div>
      
    </>
  )
}

export default App
