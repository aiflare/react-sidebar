import React, {useState} from 'react'
import logo from '../assets/logo/logo.png'
const SideMenu = function SideMenu(props) {
    const [inactive, setInactive] = useState('')
    return (
        <div className={`side-menu ${inactive ? "inactive": ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div onClick={()=>{
                    setInactive(!inactive);
                }} 
                    className="toggle-menu-btn" >
                    <i className="bi bi-arrow-left-square"></i>
                </div>
            </div>
            <div className="search-controller">
                <div className="search-btn">
                    <i className="bi bi-search"></i>
                </div>
                <input type="search" placeholder="Search" />
            </div>

            <div className="divider">

            </div>

        </div>
    )
}

export default SideMenu;
