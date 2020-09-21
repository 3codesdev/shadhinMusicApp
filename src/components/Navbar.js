import React from 'react';
import $ from 'jquery';
import iconCross from '../assets/img/icon-cross.png';
import artist1 from '../assets/img/artist1.jpg';
import logo from '../assets/img/logo.png';
import userImg from '../assets/img/user.jpg';
import notification1 from '../assets/img/notification1.jpg';
import notification2 from '../assets/img/notification2.jpg';
import notification3 from '../assets/img/notification3.jpg';
import Data from './Data';

function l(args) { console.log(args); }
function searchHandler(e){
    let searchResult = $('.search-reasult ul'),
        term = $(e.target).val().toLowerCase();
    let matches = '';
    for( let data in Data.data ){
        Array.from(Data.data[data].data).forEach((item) => {
            let artistName = '';
            if(item.title.toLowerCase().indexOf(term) !== -1 || item.Artist.toLowerCase().indexOf(term) !== -1){
                item.image = item.image.replace("<$size$>", "300");
                artistName = ' - ' + item.Artist;
                if(item.Artist == item.title){
                    artistName = '';
                }
                matches += `<li><a><img src=${item.image} /> <span>${item.title}</span>${artistName}</a></li>`;
            }
        });
    }
    searchResult.html(matches);
    $('.search-reasult').addClass("active");
    if(term.length < 1 || matches == ''){
        $('.search-reasult').removeClass("active");
    }
}

const Navbar = () => {
    return (
        <>
                <div className="top-part">
                    <div className="src d-none d-md-block">
                        <form>
                            <input type="" name="" onKeyUp={searchHandler} placeholder="Search artist, songs, videos..."/>
                            <button type="submit" className="btn-submit"><i className="fa fa-search"></i></button>
                            <button className="search-cancil"><img src={iconCross} /></button>
                        </form>
                    </div>
                    <div className="search-reasult">
                        <ul>
                            <li><a><img src={artist1} /> <span>Habib wa</span>hid - Prithibir Joto Shukh</a></li>
                        </ul>
                    </div>
                    <div className="mobile-logo d-block d-md-none">
                        <a href="index.html"><img src={logo} alt="logo" /></a>
                    </div>
                    <div className="user-info">
                        <ul>
                            <li><a href="#!" className="open-drop" id="usertab2"><i className="fa fa-bell"></i></a></li>
                            <li><a href="#!" className="open-drop" id="usertab1"><img src={userImg} /></a></li>
                        </ul>
                    </div>
                    <div className="user-menu" id="usertab1show">
                        <ul>
                            <li className="waves-effect">
                                <a href="my-profile.html">
                                    <div className="d-flex">
                                        <ul className="d-flex user-desc">
                                            <li><img src={userImg} className="dropdown-user" alt="user" /></li>
                                            <li>
                                                <h4 className="user-name">Johnathon Joe</h4>
                                                <p className="phone">+8801710 000 000</p>
                                            </li>
                                        </ul>
                                        <i className="fa fa-chevron-right"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="waves-effect">
                                <div className="d-flex upgrade-to-pro">
                                    <div className="user-upgrade">
                                        <h4>Upgrade to pro</h4>
                                        <p>Ad-free, unlimited offline downloads and create playlist</p>
                                    </div>
                                    <a href="#!" className="waves-effect user-get-pro">Get Pro</a>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <h4>App push notifications</h4>
                                    <label className="switch">
                                        <input type="checkbox" checked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </li>
                            <li className="waves-effect">
                                <a href="#!">
                                    <div className="d-flex">
                                        <h4>Your point</h4>
                                        <h6 className="your-point">100</h6>
                                    </div>
                                </a>
                            </li>
                            <li className="waves-effect">
                                <a href="#!">
                                    <div className="d-flex">
                                        <h4>Rate on Google play</h4>
                                        <i className="fa fa-chevron-right"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="waves-effect">
                                <a href="#!">
                                    <div className="d-flex">
                                        <h4>Contact us</h4>
                                        <i className="fa fa-chevron-right"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="waves-effect">
                                <a href="#!">
                                    <div className="d-flex">
                                        <h4>Terms of use</h4>
                                        <i className="fa fa-chevron-right"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="waves-effect user-logout">Log out</a>
                            </li>
                            <li>
                                <p className="dropdown-copyright">&copy; 2020 Shadhin. All rights reserved.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="user-menu" id="usertab2show">
                        <h4 className="noti-heading">Notifications</h4>
                        <ul className="notification-list">
                            <li className="waves-effect">
                                <a href="#!">
                                    <div className="d-flex">
                                        <div className="noti-action noti-comment"><img src={notification1} alt="notification" /></div>
                                        <div>
                                            <p className="noti-date">Yesterday at 3:00 pm</p>
                                            <h4 className="user-name">Russell responed to your comment, Tap to view details.</h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="waves-effect">
                                <a href="#!">
                                    <div className="d-flex">
                                        <div className="noti-action noti-like"><img src={notification2} alt="notification" /></div>
                                        <div>
                                            <p className="noti-date">28 April at 6:00 pm</p>
                                            <h4 className="user-name">Shariar ahmed liked to your comment, Tap to view details.</h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="notification-drop-btm">
                            <p className="noti-date">22 April at 5:00 pm</p>
                            <h4>Listen Hridpindo on Shadhin music</h4>
                            <p>Lorem ipsum dolor set amit, consectetur adipiscing elit. Lorem ipsum dolor set amit.</p>
                            <img src={notification3} />
                        </div>
                    </div>
                    <div className="user-menu" id="usertab2show">
              <h4 className="noti-heading">Notifications</h4>

            </div>
                </div>
        </>
    )
}

export default Navbar;