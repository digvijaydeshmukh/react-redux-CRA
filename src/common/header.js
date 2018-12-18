import React from 'react';
import { Link } from "react-router-dom";
class HeaderComp extends React.Component {
    render() {
        return (
            <div className="container">
                 <div className="header">
                <a href="#default" className="logo">CompanyLogo</a>
                <div className="header-right">
                
                    <Link to="">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">login</Link>
                    
                </div>
            </div>
            </div>
           
        )
    }
}
export default HeaderComp;