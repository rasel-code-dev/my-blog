import React from 'react';

import "./styles.scss";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from  "@fortawesome/react-fontawesome"
import {faFacebook, faGithub, faLinkedin, faYoutube} from "@fortawesome/pro-brands-svg-icons";
import {faGlobe} from "@fortawesome/pro-solid-svg-icons";

const Footer = () => {
  let start = '2021-11-08T15:40:15.000Z'

    const appState = useSelector(state=>state.appState)


  return (
    <div className="bg-primary py-5">
        <div className="container-1200 px-4">
            <div className="footer text-center grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-4 md:text-left ">
                <div>
                    <h3 className="text-xl text-gray-200 mb-2">My Blog</h3>
                    <Link  className='text-gray-300 text-sm mb-2'>Hire Me</Link>
                    <div className="social flex py-2 justify-center md:justify-start">
                        <li className="mr-2">
                            <a href="https://www.facebook.com/raselmraju" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="https://github.com/rasel-code-dev" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="https://www.linkedin.com/in/rasel-code-dev" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="https://rasel-code-dev.vercel.app" target="_blank">
                                <FontAwesomeIcon icon={faGlobe} />
                            </a>
                        </li>
                    </div>
                    <h4  className="text-md text-gray-300 mb-2">© 2021, All Rights Reserved.</h4>
                </div>

                <div>
                    <h3 className="text-md text-gray-200 mb-2">Quick Link</h3>
                    <ul>
                        <li className="text-sm"><Link className="text-gray-300" to="/admin/dashboard/add-post/null" >Create a Post</Link> </li>
                        <li className="text-sm">
                            <Link className="text-gray-300" to="/auth/login" >Login</Link> </li>
                        <li className="text-sm">
                            <Link className="text-gray-300" to="/auth/registration" >Registration</Link> </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-md text-gray-200 mb-2">Authors</h3>
                    <ul>
                        <li className="text-sm">  <Link className="text-gray-300" to="/author/profile/rasel_mahmud" >#Rasel</Link> </li>
                        <li className="text-sm">  <Link className="text-gray-300" to="/author/profile/Raju%20Sarker" >#Raju</Link> </li>
                    </ul>
                </div>



                <div>
                    <h3 className="text-md text-gray-200 mb-2">Hottest Stories</h3>
                    <ul>
                        <li className="text-sm">  <Link className="text-gray-300" to="/?search=javascript" >#Javascript</Link> </li>
                        <li className="text-sm">  <Link className="text-gray-300" to="/?search=react" >#React</Link> </li>
                        <li className="text-sm">  <Link className="text-gray-300" to="/?search=mongodb" >#Databse</Link> </li>
                        <li className="text-sm">  <Link className="text-gray-300" to="/?search=mysql" >#MySQL</Link> </li>
                        <li className="text-sm">  <Link className="text-gray-300" to="/?search=loop" >#Loop</Link> </li>
                    </ul>
                </div>

            </div>
            {/*<h4 className="title text-md text-white">Project Start ON {new Date(start).toLocaleString()}</h4>*/}
            <div className="flex justify-center text-gray-200  mt-4 md:mt-0">
                <h4 className="mx-4 font-normal">Total Hits {appState.visitors.total_visitors && appState.visitors.total_visitors.length > 0 ? appState.visitors.total_visitors.length: 0}  </h4>
                <h4 className="font-normal">Today Hits {appState.visitors.day_visitors && appState.visitors.day_visitors.length > 0 ? appState.visitors.day_visitors.length: 0}  </h4>
            </div>
        </div>
    </div>
  );
};

export default Footer;
