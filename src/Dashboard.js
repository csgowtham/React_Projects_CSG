import React from 'react';
import { Card } from './Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import findIndexById from './utils/helper';
import { useNavigate } from 'react-router';



export const Dashboard = ({data, setData}) => {
const navigate = useNavigate();
let cardData = [
    {
        title : "EARNINGS (MONTHLY)",
        value : "$ 40,000",
        color : "primary",
        icon : "calendar",
        isProgress : false
    },
    {
        title : "EARNINGS (ANNUAL)",
        value : "$ 215,000",
        color : "success",
        icon : "dollar-sign",
        isProgress : false
    },
    {
        title : "TASKS",
        value : "50 %",
        color : "success",
        icon : "clipboard-list",
        isProgress : true
    },
    {
        title : "Pending Requests",
        value : "18",
        color : "warning",
        icon : "comments",
        isProgress : false
    }

    
]
const handleDelete = (id)=>{
    
    let index = findIndexById(data,id);
    
    if(index!==-1){
        data.splice(index,1);
        setData([...data]);
    }
    else{
        console.error("Invalid id")
    }
}


    return (
        <div>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

                        </div>

                        {/* <!-- Content Row --> */}
                        <div className="row">
                        {
                            cardData.map((e,i)=>{
                                return <Card data={e} key={i}/>
                            })
                        }
                        

                            
                        </div>

                        <div className="row">
                        <Table striped>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Mail ID</th>
                                <th>Mobile No</th>
                                <th>Batch</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                               { data.map((e)=>{
                                    return <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.mobile}</td>
                                        <td>{e.batch}</td>
                                        <td>
                                            <Button variant="primary" onClick={()=>navigate(`/view-user/${e.id}`)}>Edit</Button>
                                            &nbsp;&nbsp;
                                            <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                })
                               }
                            </tbody>
                        </Table>
                        </div>


                    </div>



                </div>
                {/* <!-- /.container-fluid --> */}


            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}


            {/* <!-- End of Footer --> */}
        </div>
    )
}
