import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

function MenuItem({name, subMenus, iconClassName, to, exact, inactive}) {
    const [expand, setExpand] = useState(false);
    const handleClick = (e) => {
        setExpand(!expand);
        return (name === 'Employees')?e.preventDefault():null;
    }

    return (
        <li>
            {!inactive || !to ?
            <NavLink  
            exact={exact} to={to} onClick={handleClick} className="menu-item">
                <div className="menu-icon">
                    <i className={iconClassName}></i><span className="menu-text">{name}</span>
                </div>
            </NavLink>

            :<span className="menu-item"> <div className="menu-icon">
                    <i className={iconClassName}></i><span className="menu-text">{name}</span>
                </div>
            </span>}
                { subMenus && subMenus.length > 0?
                <ul className={`sub-menu ${expand && !inactive? "active": ""}`}>
                    {subMenus.map((subItem, index) =>{
                        return <li key={index}>
                            <NavLink to={subItem.to}><i className={subItem.iconClassName}></i><span className="sub-item-text">{subItem.name}</span></NavLink>
                        </li>
                                        
                    })}
                </ul>:null}

                {inactive?<div className="divider"></div>:""}
        </li>
        
    )
}

export default MenuItem
