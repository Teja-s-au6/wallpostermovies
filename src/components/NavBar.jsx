import React, { Component } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faChevronDown, faGlobe, faTv, faHeart } from '@fortawesome/free-solid-svg-icons';
class NavBar extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <div className="header-menu">
                        <div className="title">WallPoster <span>Films</span></div>
                        <div className="sidebar-btn">
                        </div>
                        <ul>
                            <li><a href="#favourites"><FontAwesomeIcon icon={faHeart} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="sidebar-menu">
                        <center className="profile">
                            <img src="https://picsum.photos/200" alt="profile" />
                            <p>User</p>
                        </center>
                        <li className="item">
                            <a href="#home" className="menu-btn">
                                <FontAwesomeIcon icon={faHome} /><span>Home</span>
                            </a>
                        </li>
                        <li className="item" id="tv">
                            <a href="#tv" className="menu-btn">
                                <FontAwesomeIcon icon={faTv} /><span>TV-Series</span>
                            </a>
                        </li>
                        <li className="item" id="imdb">
                            <a href="#imdb" className="menu-btn">
                               <span>Top-IMDB</span>
                            </a>
                        </li>
                        <li className="item" id="genre">
                            <a href="#genre" className="menu-btn">
                                <FontAwesomeIcon icon={faList} className="favicon" /><span>Genre <FontAwesomeIcon icon={faChevronDown} className="drop-down" /></span>
                            </a>
                            <div className="sub-menu">
                                <a href="#action"><span>Action</span></a>
                                <a href="#comedy"><span>Comedy</span></a>
                                <a href="#drama"><span>Drama</span></a>
                                <a href="#horror"><span>Horror</span></a>
                                <a href="#family"><span>Family</span></a>
                                <a href="#music"><span>Music</span></a>
                                <a href="#thriller"><span>Thriller</span></a>
                            </div>
                        </li>
                        <li className="item" id="country">
                            <a href="#country" className="menu-btn">
                                <FontAwesomeIcon icon={faGlobe}  className="favicon" /><span>Country <FontAwesomeIcon icon={faChevronDown} className="drop-down" /></span>
                            </a>
                            <div className="sub-menu">
                                <a href="#india"><span>India</span></a>
                                <a href="#usa"><span>USA</span></a>
                                <a href="#uk"><span>UK</span></a>
                                <a href="#Skorea"><span>S.korea</span></a>
                                <a href="#japan"><span>Japan</span></a>
                                <a href="#italy"><span>Italy</span></a>
                                <a href="#france"><span>France</span></a>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar