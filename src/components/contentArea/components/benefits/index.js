import React from 'react';
import benefitImg from '../../../../assets/images/benefit-img.jpg';

function Benefits() {
    return (
        <div>
            <h6 className="title6 roboto-bold">Get the Membership & Never Pay Full Price Again</h6>
            <div className="benefit-box">
                <img src={benefitImg} className="bnft-img img-fluid w-100"/>
                <div className="cont-area">
                    <h4 className="title4 roboto-semibold mb-3">Benefits</h4>
                    <ul className="list-normal">
                        <li>Member Only Discounts
                            <span>Save on every purchase! Enjoy special
prices on a wide range of product categories</span>
                        </li>
                        <li>Priority Support
                            <span>Get all your queries resolved on a priority basis, only for TriBe members</span>
                        </li>
                        <li>Early Access to Collections
                            <span>Grab the latest products and exclusive collections before everyone else</span>
                        </li>
                    </ul>
                    <a href="#." className="link-btn">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default Benefits
