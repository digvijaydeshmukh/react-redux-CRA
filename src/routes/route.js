import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComp from '../component/home';
import ContactComp from '../component/contact'
import AboutComp from '../component/about'
import HeaderComp from '../common/header';
import LoginComp from '../component/login';
import Comp1 from '../component/dashboardComp/comp1'
import Comp2 from '../component/dashboardComp/comp2'
import Comp3 from '../component/dashboardComp/comp3'
import PrivateRoute from './privateRoutes'
class RouterComp extends React.Component {
    render() {

        return (

            <Router>
                <div>
                    <HeaderComp />
                    
                        <Route exact path='' component={HomeComp}></Route>
                        <Route path='/contact' component={ContactComp}></Route>
                        <Route path='/about' component={AboutComp}></Route>
                        <Route path='/login' component={LoginComp}></Route>
                        <Route path="/dashboard" component={Comp1}></Route>
                        <Route path="/comp2" component={Comp2}></Route>
                        <Route path="/comp3" component={Comp3}></Route>
                    
                </div>


            </Router>
        );
    }
}

export default RouterComp;