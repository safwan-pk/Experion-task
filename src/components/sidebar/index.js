/**
 * Sidebar component that displays the navigation menu
 * Shows different menu options and handles the open/closed state
 */
import React from 'react';
import Icon from "../../components/Icon";

function Sidebar({ isOpen }) {
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            {/* Logo at the top of sidebar */}
            <div className="logo">
                <Icon name="logo" width={32} height={32} />
            </div>
            {/* Navigation menu list */}
            <ul className="sidebar-menu-list mt-5 pt-4">
                <li>
                    <a className="menu-item" href="#">
                        <Icon name="membership" width={19} height={19} />
                        <span className="menu-nm">Membership</span>
                    </a>
                </li>
                {/* Active menu item - currently selected */}
                <li className="active">
                    <a className="menu-item" href="#">
                        <Icon name="dashboard" width={28} height={28} />
                        <span className="menu-nm">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <Icon name="order" width={19} height={18} />
                        <span className="menu-nm">Orders</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <Icon name="help" width={20} height={20} />
                        <span className="menu-nm">Help</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
