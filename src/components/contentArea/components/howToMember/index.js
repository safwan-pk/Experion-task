import React from 'react';
import Icon from "../../../Icon";

function HowToMember() {
    return (
        <div className="mb-4 pb-2">
            <h3 className="title4">How to be a member</h3>
            <div className="member-box">
                <ul className="connecting-icon">
                    <li>
                        <div className="icon-bg-out">
                            <div className="icon-bg">
                                <Icon name="login" width={24} height={25} />
                            </div>
                        </div>
                        <p>Login<br/> or Signup</p>
                    </li>
                    <li>
                        <div className="icon-bg-out">
                            <div className="icon-bg">
                                <Icon name="memberProfile" width={25} height={25} />
                            </div>
                        </div>
                        <p>Membership<br/> in Profile</p>
                    </li>
                    <li>
                        <div className="icon-bg-out">
                            <div className="icon-bg">
                                <Icon name="subscribe" width={25} height={25} />
                            </div>
                        </div>
                        <p>Select a<br/> Subsciption</p>
                    </li>
                    <li>
                        <div className="icon-bg-out">
                            <div className="icon-bg"> 
                                <Icon name="payBill" width={25} height={25} />  
                            </div>
                        </div>
                        <p>Pay the<br/> Bill</p>
                    </li>
                    <li>
                        <div className="icon-bg-out">
                            <div className="icon-bg">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.875 13.6249C21.125 17.3749 18.2975 20.9059 14.33 21.6949C12.395 22.0803 10.3877 21.8453 8.59398 21.0235C6.80026 20.2017 5.31155 18.8349 4.33981 17.1178C3.36807 15.4007 2.96285 13.4208 3.18184 11.46C3.40082 9.49913 4.23286 7.65738 5.55947 6.19695C8.28047 3.19995 12.875 2.37495 16.625 3.87495" stroke="#0F255F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.125 12.125L12.875 15.875L21.875 6.125" stroke="#0F255F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <p>Get the<br/> Membership</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HowToMember
