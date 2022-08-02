import React from 'react'
import {useLocation} from 'react-router-dom'

const Userdetails = () => {
    const location = useLocation();
    console.log(location.state);
  return (
        <div className="col-lg-5">
            <a href="/#" data-toggle="modal" data-target="#view_info">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
            </a>
            <div className="chat-about">
                <h6 className="m-b-0">{location.state.fNameData}</h6>
                <small>{location.state.status === 1 ? 'Admin':'user'}</small>
                {/* <small>Last seen: 2 hours ago</small> */}
            </div>
        </div>
  )
}

export default Userdetails