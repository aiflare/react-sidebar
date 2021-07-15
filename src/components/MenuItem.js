import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

function MenuItem({name, subMenus, iconClassName, onClick, to, exact}) {
    const [expand, setExpand] = useState(false);
    return (
        <li onClick={onClick}>
            <NavLink  exact={exact} to={to?to:""} onClick={() => setExpand(!expand)} className="menu-item">
                <div className="menu-icon">
                    <i className={iconClassName}></i><span className="menu-text">{name}</span>
                </div>
            </NavLink>
            
                { subMenus && subMenus.length > 0?
                <ul className={`sub-menu ${expand? "active": ""}`}>
                    {subMenus.map((subItem, index) =>{
                        return <li key={index}>
                            
                            <NavLink to={subItem.to}><i className={subItem.iconClassName}></i><span className="sub-item-text">{subItem.name}</span></NavLink>
                        </li>
                                        
                    })}
                </ul>:null}
            
        </li>
    )
}

export default MenuItem
