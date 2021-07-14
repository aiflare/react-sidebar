import React, {useState} from 'react'

function MenuItem({name, subMenus, iconClassName, onClick}) {
    const [expand, setExpand] = useState(false);
    return (
        <li onClick={onClick}>
            <span onClick={() => setExpand(!expand)} className="menu-item">
                <div className="menu-icon">
                    <i className={iconClassName}></i><span className="menu-text">{name}</span>
                </div>
            </span>
            
                { subMenus && subMenus.length > 0?
                <ul className={`sub-menu ${expand? "active": ""}`}>
                    {subMenus.map((subItem, index) =>{
                        return <li key={index}>
                            <i className="bi bi-person-badge"></i>
                            <span>{subItem.name}</span>
                        </li>
                                        
                    })}
                </ul>:null}
            
        </li>
    )
}

export default MenuItem
