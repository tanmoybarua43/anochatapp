import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="col-lg-7 hidden-sm text-right">
        <NavLink to="/chat" className="btn btn-outline-info m-1"><i className="fa fa-home"></i></NavLink>
        <NavLink to="/" className="btn btn-outline-secondary m-1"><i className="fa fa-camera"></i></NavLink>
        <NavLink to="/" className="btn btn-outline-primary m-1"><i className="fa fa-image"></i></NavLink>
        <NavLink to="/sittings" className="btn btn-outline-info m-1"><i className="fa fa-cogs"></i></NavLink>
        <NavLink to="/" className="btn btn-outline-warning m-1"><i className="fa fa-question"></i></NavLink>
        <NavLink to="/signin" className="btn btn-outline-danger m-1"><i className="fa fa-sign-out"></i></NavLink>
    </div>
  )
}

export default Navigation