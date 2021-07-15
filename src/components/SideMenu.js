import React, {useState, useEffect} from 'react'
import logo from '../assets/logo/logo.png'
import MenuItem from './MenuItem'
import userIcon from '../assets/user.jpg'


const menuItems = [
    {"name": "Dashboard", exact:true, "to":"/", iconClassName:"bi bi-speedometer2"},
    {"name": "Employees",
        "to":"/employees",
        exact:true,
        iconClassName:"bi bi-people-fill",
        "subMenus":[{"name": "Hourly", "to":"/employees/hourly", iconClassName:"bi bi-speedometer2"}, 
                    {"name": "Regular", "to":"/employees/regular", iconClassName:"bi bi-speedometer2"}]},
    {"name": "Dashboard", "to":"/dashboard2", iconClassName:"bi bi-speedometer2",}
]

const SideMenu = function SideMenu({onCollapse}) {
    const [inactive, setInactive] = useState('');
    
    useEffect(() => {
        if (inactive){
            document.querySelectorAll('.active').forEach(function(el){
                el.classList.remove('active');
            })
        }
        onCollapse(inactive);
         
    }, [inactive])

    return (
        <div className={`side-menu ${inactive ? "inactive": ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div onClick={()=>{
                        setInactive(!inactive);
                    }}  
                    className="toggle-menu-btn" >
                   {inactive?  <i className="bi bi-list"></i>: <i className="bi bi-list"></i>}
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
             <div className="main-menu"> 
                <ul>
                    {
                        menuItems.map((menuItem, index) => (
                            <MenuItem 
                                key={index}
                                name={menuItem.name} 
                                exact={menuItem.exact}
                                to={menuItem.to}
                                subMenus={menuItem.subMenus}
                                iconClassName={menuItem.iconClassName}
                                onClick={()=>{
                                    if (inactive){
                                        setInactive(false)
                                    }
                                }}
                                />
                        ))
                    }
                   
                </ul>
             </div>

        <div className="side-menu-footer">
            <div className="footer-avtaar">
                <img src={userIcon} alt="Footer-logo" />
            </div>
            <div className="side-text">
                <h5>Ana Neil</h5>
                <p>ana.neil@aiflare.in</p>
            </div>
        </div>

        </div>
    )
}

export default SideMenu;
