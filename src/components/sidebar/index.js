import React from 'react';
import Icon from "../../components/Icon";


function Sidebar({ isOpen }) {
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="logo">
                <Icon name="logo" width={32} height={32} />
            </div>
            <ul className="sidebar-menu-list mt-5 pt-4">
                <li>
                    <a className="menu-item">
                        <Icon name="membership" width={19} height={19} />
                        <span className="menu-nm">Memership</span>
                    </a>
                </li>
                <li className="active">
                    <a className="menu-item">
                        <Icon name="dashboard" width={28} height={28} />
                        <span className="menu-nm">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item">
                        <Icon name="order" width={19} height={18} />
                        <span className="menu-nm">Orders</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item">
                        <Icon name="help" width={20} height={20} />
                        <span className="menu-nm">Help</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
