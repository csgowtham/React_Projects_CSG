import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const AddUser = ({data,setData}) => {
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [mobile,setMobile] = useState("");
    let [batch,setBatch] = useState("");

    const handleSubmit = ()=>{
        let newUser = {
            id : data.length ? data[data.length-1].id+1 : 1,
            name,
            email,
            mobile, 
            batch
        }
        console.log(newUser);
        let newData = [...data, newUser];
        setData(newData);
        alert("Successfully Added User to Database");   
        navigate('/');
    }
    const navigate = useNavigate();

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
                            <h1 className="h3 mb-0 text-gray-800">AddUser</h1>
                            
                        </div>
                        <div className="row">
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>                                    
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Mobile No</Form.Label>
                                    <Form.Control type="text" placeholder="Enter mobile no" onChange={(e)=>setMobile(e.target.value)}/>                                    
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Batch</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>                                    
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>                                    
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
