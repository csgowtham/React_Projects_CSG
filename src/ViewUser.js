import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import findIndexById from './utils/helper';

const ViewUser = ({data,setData}) => {
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [mobile,setMobile] = useState("");
    let [batch,setBatch] = useState("");

    let {id} = useParams();
    id=Number(id);
    const navigate = useNavigate();
    

    const getData = (id)=>{
        let index = findIndexById(data,Number(id));
        if(index!==-1){
            setName(data[index].name);
            setEmail(data[index].email);
            setMobile(data[index].mobile);
            setBatch(data[index].batch);
        }
        else{
            navigate('/dashboard');
        }

    }

    useEffect(() => {
        if(id){
            getData(id);
        }
        
    }, []);

    const handleSubmit = ()=>{
        let index = findIndexById(data,Number(id));
        let editedUserData = {
            id : data[index].id,
            name,
            email,
            mobile, 
            batch
        }
        console.log(editedUserData);
        let newData = [...data];
        newData.splice(index,1,editedUserData);
        
        setData(newData);
        alert("Successfully updated User details to Database");   
        navigate('/');
    }
    

    return (
        <>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">ViewUserUser</h1>
                            
                        </div>
                        <div className="row">
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>                                    
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Mobile No</Form.Label>
                                    <Form.Control type="text" placeholder="Enter mobile no" onChange={(e)=>setMobile(e.target.value)} value={mobile}/>                                    
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Batch</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)} value={batch}/>                                    
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name}/>                                    
                                </Form.Group>

                                
                                <Button variant="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Form>
                        </div>

                        

                    </div>

                </div>

            </div>

        </>
    )
}

export default ViewUser;