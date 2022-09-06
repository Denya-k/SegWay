import React from 'react';
import "./page-menu.scss";

export default function PageMenu({header, items, active, setActive}) {
  return (
    <div className={active ? "menu active" : "menu"}> 
        <div className="blur" onClick={() => setActive(!active)}/>

        <div className="menu__content">
            <div className="menu__header">{header}</div>
            <hr />
            <ul>
                {items.map((item) => 
                <li key={item.value}>
                    <a href={item.href}>{item.value}</a>
                </li>
                )}
            </ul>
        </div>
    </div>
  )
}
