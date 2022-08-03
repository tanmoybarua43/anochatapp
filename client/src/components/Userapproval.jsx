import React from 'react'
import axios from 'axios'
import Navigation from './Navigation'
import Userdetails from './Userdetails'

const Userapproval = () => {
    // const users = async () => {
    //     const response = await axios.get('')
    // }
  return (
    <>
            <div className="container">
        <div className="row clearfix">
            <div className="col-md-12">
                <div className="card chat-app">
                    <div className="chat ml-0 border-left-0">
                        <div className="chat-header clearfix">
                            <div className="row">
                                <Userdetails />
                                <Navigation />
                            </div>
                        </div>
                        <div className="user-history">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Userapproval