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
            <nav aria-label="Main Navigation">
                <ul className="sidebar-menu-list mt-5 pt-4">
                    <li>
                        <a className="menu-item" href="/membership" aria-label="Membership">
                            <Icon name="membership" width={19} height={19} aria-hidden="true" />
                            <span className="menu-nm">Membership</span>
                        </a>
                    </li>
                    {/* Active menu item - currently selected */}
                    <li className="active">
                        <a className="menu-item" href="/dashboard" aria-current="page" aria-label="Dashboard">
                            <Icon name="dashboard" width={28} height={28} aria-hidden="true" />
                            <span className="menu-nm">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item" href="/orders" aria-label="Orders">
                            <Icon name="order" width={19} height={18} aria-hidden="true" />
                            <span className="menu-nm">Orders</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item" href="/help" aria-label="Help">
                            <Icon name="help" width={20} height={20} aria-hidden="true" />
                            <span className="menu-nm">Help</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
