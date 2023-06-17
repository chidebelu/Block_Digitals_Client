import React, {useState, Fragment} from "react"
import paidSlip from "layouts/PaidSlip"
import Navbar from "layouts/Navbar"
const PaidOut = () =>{
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

   const indexOflastPost = currentPage * postsPerPage
   const indexOfFirstPost = indexOflastPost - postsPerPage
   const currentPosts = paidSlip.slice(indexOfFirstPost, indexOflastPost)
   
       const pageNumber = []
        for(let i = 1; i <= Math.ceil(paidSlip.length/ postsPerPage); i++){
                pageNumber.push(i)
        }
   
        const paginate = (pageNumber) =>{
            console.log(pageNumber)
            setCurrentPage(pageNumber)
        }
    return(
        <Fragment>        
            <Navbar/>
            <div className="container-fluid">
            <div className="row">
            <div className="col-xs-12 col-md-9 col-lg-9 center">

                <h1 className="text-center fw-bold mb-5 mt-3">PROINVEST RECENT PAYOUTS</h1>

                < div className="card well ">         
            <table className="stripped hover table-sm">
            <thead className="fw-bold">
                <tr>
                    <th>FIRST NAME</th>
                    <th>AMOUNT</th>
                    <th>METHOD</th>
                    <th>DATE</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentPosts.map(user => (<tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.Amount}</td>
                        <td>{user.Method}</td>
                        <td>{user.Date}</td>
                    </tr>))
                }
            </tbody>
        </table> 

        <div className="col-xs-12 col-md-9 col-lg-9 center mx-auto">
                    <nav >
                        <ul className="pagination mt-5">
                                {
                                    pageNumber.map(number => (
                                        <li key={number.id }className="page-item">
                                            <a href="#" onClick={()=>paginate(number)} className="page-link">
                                                {number}
                                            </a>
                                        </li>
                                    ))
                                }
                        </ul>
                    </nav>
                </div>
        </div>   
        </div>
        </div>
        </div>

        </Fragment>
       
    )
}
export default PaidOut