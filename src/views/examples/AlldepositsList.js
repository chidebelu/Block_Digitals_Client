import React, {useEffect, useContext, useState} from 'react'
import {Table, Button} from "react-bootstrap"
import Loader from "../../layouts/Loader"
import authContext from '../../components/context/auth/authContext'
import {Link } from 'react-router-dom'
import Navbar from 'layouts/Navbar'
import { Helmet } from 'react-helmet-async'
import Message from 'layouts/Message'

const AllDepositsList = () => {
    const context = useContext(authContext)
    const [search, setSearch] = useState("")
    const { loading, error, adminGetAllDepositsList, deleteUserWithdrawalRequest, adminGetAllDepositsListt} = context
   
    const onChange = (e) =>{
        e.preventDefault()
        setSearch(
            e.target.value
        )
    }

    useEffect(()=>{
        adminGetAllDepositsList()
        //eslint-disable-next-line
    },[])

    const deleteHandler = (id)=>{
        if(window.confirm("Are you sure?")){
            deleteUserWithdrawalRequest(id)
        }
    }
    
  return ( <>
      <Helmet><title>List All Users</title></Helmet>
      <Navbar/>
     <div className='col-xs-12 col-md-12 col-lg-12'> 
      <div className='row'>
         <div className=' col-lg-6'> <h1 style={{textAlign:"center"}} className="mt-1 ">List of all User Withdrawal Requests</h1> </div>
    <div className=" col-lg-6'"><input onChange={onChange} type="text" name="search" placeholder='Search' className='form-control mb-3' style={{width:"250%"}} /></div></div> </div>
    {loading ? <Loader/> : error ? <Message>{error}</Message> 
    : (
        <Table striped bordered hover responsive className='table-sm' variant='dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>AMOUNT</th>
                    <th>METHOD</th>
                    <th>PLAN</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                    <th>EDIT/DELETE</th>
                </tr>
            </thead>
            <tbody>
                {adminGetAllDepositsListt.map(user=>(
                    <tr key={(user._id)}>
                        <td>{user._id}</td>
                        <td>{user.amount}</td>
                        <td>{user.method}</td>
                        <td>{user.plann}</td>
                        <td>{user.status}</td>
                        <td>{user.date }</td>
                        <td>
                            <Link to = {`/dashboard/admin/user/${user._id}/edit/withdrawaldetails`}>
                                <Button variant=""  className='btn-sm bg-success mx-3'>
                                    <i className='fas fa-edit'></i>
                                </Button>
                            </Link>
                            <Button variant='danger' className="btn-sm bg-danger" onClick={()=>deleteHandler(user._id)}><i className="fas fa-trash"></i></Button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </Table>
    )}
    </>
  )
}

export default AllDepositsList