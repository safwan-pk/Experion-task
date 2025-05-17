/**
 * ContentArea component that displays the main content of the application
 * Contains three main sections: HowToMember, ProductsTab, and Benefits
 * Uses Bootstrap grid system for responsive layout
 */
import React from 'react';
import HowToMember from './components/howToMember';
import ProductsTab from './components/productsTab';
import Benefits from './components/benefits';

function ContentArea() {
    return (
        <div className="content-area">
            <div className="row">
                {/* Main content area - takes 9/12 columns on extra large screens */}
                <div className="col-xl-9 pt-4 pb-0 pb-md-4 pb-xl-5 mb-4 mb-xl-0 left-area pe-xl-4">
                    <HowToMember />
                    <ProductsTab />
                </div>
                {/* Sidebar/benefits area - takes 3/12 columns on extra large screens */}
                <div className="col-xl-3 col-lg-4 col-md-12 pt-xl-4 ps-xl-4 pb-5 pb-xl-0">
                    <Benefits />
                </div>
            </div>
        </div>
    )
}

export default ContentArea;
