import React , {useState} from 'react';
import './index.css';
import SideBar from './SideBar';
import { Dashboard } from './Dashboard';
import { AddUser } from './AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUser from './ViewUser';

function App() {
  let [data,setData] = useState([
    {
      id : 1,
      name : "Alex",
      email : "alex@123.com",
      mobile : "9272187272",
      batch : "FSD57"
    },
    {
      id : 2,
      name : "Bob",
      email : "bob@xyz.com",
      mobile : "9834472893",
      batch : "FSD57"
    },
    {
      id : 3,
      name : "Jerry",
      email : "jerry@abc.com",
      mobile : "9872394872",
      batch : "FSD57"
    },  
  ]);
  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">

        

        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/" element={<Dashboard data={data} setData = {setData}/>}/>
            <Route path="/add-user" element={<AddUser data={data} setData = {setData}/>}/>
            <Route path="/view-user/:id" element={<ViewUser data={data} setData = {setData}/>}/>
          </Routes>
        </BrowserRouter>
        

        

      </div>
      {/* <!-- End of Content Wrapper --> */}

      {/* </div> */}
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* <!-- Logout Modal--> */}

    </>
  );
}

export default App;
