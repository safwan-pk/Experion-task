import React, { useState }  from 'react';
import avatar from '../../assets/images/avatar.png';
import Icon from "../Icon";


function Header({ onToggleSidebar }) {

    return (
        <header>
            <div className="head-name-area d-none d-md-block">
                <h2 className="title2 roboto-bold mb-0">Hi John!</h2>
            </div>
            <div className="head-right-area">
                <div className="head-search-area">
                    <div class="search-box">
                        <input type="text" placeholder="Search for products, brands and more" />                    
                        <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.6">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#041131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 21L16.65 16.65" stroke="#041131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                    </div>
                </div>
                <div className="gt-score-area ms-lg-5 me-3">
                    <div className="main-score">
                        <span className="roboto-semibold">1534</span>
                        <p className="small mb-0">GT Score</p>
                    </div>
                    <ul className="icon-score mb-0">
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_2_853)">
                                <circle cx="10" cy="10" r="10" fill="url(#paint0_radial_2_853)"/>
                                </g>
                                <circle cx="9.99996" cy="10" r="8.33333" fill="url(#paint1_linear_2_853)"/>
                                <path d="M13.2241 13.2241C13.3961 13.3961 13.6767 13.3972 13.8329 13.2107C14.4693 12.4511 14.8678 11.5165 14.9724 10.5244C15.0925 9.38583 14.8182 8.2405 14.1953 7.27984C13.5724 6.31918 12.6387 5.60138 11.5502 5.2464C10.6018 4.9371 9.58597 4.91957 8.63279 5.19055C8.39878 5.25708 8.28533 5.51373 8.37218 5.74098C8.45904 5.96823 8.71332 6.07956 8.94854 6.01746C9.71194 5.8159 10.5206 5.83726 11.2771 6.08398C12.1738 6.37642 12.943 6.96774 13.4561 7.75913C13.9692 8.55053 14.1952 9.49405 14.0963 10.432C14.0128 11.2234 13.7024 11.9703 13.2068 12.585C13.0541 12.7744 13.052 13.052 13.2241 13.2241Z" fill="white"/>
                                <path d="M12.2709 13.9537C12.3921 14.1647 12.32 14.4359 12.0992 14.538C11.1175 14.9921 10.0108 15.1173 8.94582 14.8876C7.73672 14.6268 6.6672 13.9271 5.94393 12.9237C5.22066 11.9204 4.89497 10.6845 5.02979 9.45497C5.14856 8.37197 5.61719 7.3616 6.35833 6.57387C6.52504 6.39668 6.80513 6.41399 6.96696 6.59563C7.12879 6.77728 7.11068 7.05429 6.94734 7.23459C6.36725 7.87491 6.00054 8.68476 5.90554 9.55101C5.79447 10.5639 6.06278 11.582 6.65861 12.4086C7.25444 13.2352 8.13551 13.8116 9.13156 14.0264C9.98342 14.2101 10.8677 14.1183 11.6585 13.7703C11.8812 13.6724 12.1497 13.7428 12.2709 13.9537Z" fill="white"/>
                                <path d="M11.8494 8.93775C12.0253 8.83673 12.2526 8.8968 12.3268 9.08557C12.506 9.54153 12.5482 10.0429 12.4438 10.5271C12.3134 11.1316 11.9636 11.6664 11.4619 12.028C10.9602 12.3897 10.3422 12.5525 9.72749 12.4851C9.23514 12.4311 8.77282 12.2325 8.39689 11.9184C8.24126 11.7883 8.25613 11.5537 8.40756 11.4187C8.559 11.2838 8.78943 11.3011 8.95271 11.4214C9.20155 11.6047 9.49604 11.7209 9.80755 11.755C10.2417 11.8026 10.6781 11.6876 11.0324 11.4322C11.3867 11.1768 11.6338 10.7992 11.7258 10.3722C11.7919 10.0659 11.7748 9.74981 11.6796 9.45577C11.617 9.26283 11.6735 9.03877 11.8494 8.93775Z" fill="white"/>
                                <path d="M11.6797 8.68569C11.8394 8.56071 11.8692 8.3275 11.7222 8.18778C11.3671 7.8503 10.9183 7.62261 10.4304 7.53733C9.82122 7.43085 9.19416 7.55396 8.67043 7.88287C8.1467 8.21178 7.76346 8.72314 7.59478 9.31814C7.45969 9.79466 7.4699 10.2977 7.61966 10.7642C7.68165 10.9573 7.90466 11.0317 8.08662 10.9422C8.26857 10.8526 8.33924 10.6326 8.28915 10.436C8.21282 10.1365 8.21594 9.81995 8.30141 9.51846C8.42053 9.09826 8.69117 8.73714 9.06104 8.50486C9.43091 8.27258 9.87375 8.18564 10.304 8.26084C10.6127 8.31479 10.8992 8.44947 11.1358 8.64831C11.2911 8.77878 11.5199 8.81068 11.6797 8.68569Z" fill="white"/>
                                <circle cx="9.99996" cy="10" r="0.833333" fill="white"/>
                                <defs>
                                <filter id="filter0_i_2_853" x="0" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="4"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.768627 0 0 0 0 0.34902 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_853"/>
                                </filter>
                                <radialGradient id="paint0_radial_2_853" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) rotate(180) scale(13.75 10)">
                                <stop stop-color="#FBE36A"/>
                                <stop offset="1" stop-color="#EE9D3D"/>
                                </radialGradient>
                                <linearGradient id="paint1_linear_2_853" x1="9.99996" y1="1.66669" x2="9.99996" y2="18.3334" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F9D756"/>
                                <stop offset="1" stop-color="#EC8434"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <p>01</p>
                        </li>
                        <li>                            
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_2_865)">
                                <circle cx="10" cy="10" r="10" fill="url(#paint0_radial_2_865)"/>
                                </g>
                                <circle cx="9.99996" cy="10" r="8.33333" fill="url(#paint1_linear_2_865)"/>
                                <path d="M13.2241 13.2241C13.3961 13.3961 13.6767 13.3972 13.8329 13.2107C14.4693 12.4511 14.8678 11.5165 14.9724 10.5244C15.0925 9.38583 14.8182 8.2405 14.1953 7.27984C13.5724 6.31918 12.6387 5.60138 11.5502 5.2464C10.6018 4.9371 9.58597 4.91957 8.63279 5.19055C8.39878 5.25708 8.28533 5.51373 8.37218 5.74098C8.45904 5.96823 8.71332 6.07956 8.94854 6.01746C9.71194 5.8159 10.5206 5.83726 11.2771 6.08398C12.1738 6.37642 12.943 6.96774 13.4561 7.75913C13.9692 8.55053 14.1952 9.49405 14.0963 10.432C14.0128 11.2234 13.7024 11.9703 13.2068 12.585C13.0541 12.7744 13.052 13.052 13.2241 13.2241Z" fill="white"/>
                                <path d="M12.2709 13.9537C12.3921 14.1647 12.32 14.4359 12.0992 14.538C11.1175 14.9921 10.0108 15.1173 8.94582 14.8876C7.73672 14.6268 6.6672 13.9271 5.94393 12.9237C5.22066 11.9204 4.89497 10.6845 5.02979 9.45497C5.14856 8.37197 5.61719 7.3616 6.35833 6.57387C6.52504 6.39668 6.80513 6.41399 6.96696 6.59563C7.12879 6.77728 7.11068 7.05429 6.94734 7.23459C6.36725 7.87491 6.00054 8.68476 5.90554 9.55101C5.79447 10.5639 6.06278 11.582 6.65861 12.4086C7.25444 13.2352 8.13551 13.8116 9.13156 14.0264C9.98342 14.2101 10.8677 14.1183 11.6585 13.7703C11.8812 13.6724 12.1497 13.7428 12.2709 13.9537Z" fill="white"/>
                                <path d="M11.8494 8.93775C12.0253 8.83673 12.2526 8.8968 12.3268 9.08557C12.506 9.54153 12.5482 10.0429 12.4438 10.5271C12.3134 11.1316 11.9636 11.6664 11.4619 12.028C10.9602 12.3897 10.3422 12.5525 9.72749 12.4851C9.23514 12.4311 8.77282 12.2325 8.39689 11.9184C8.24126 11.7883 8.25613 11.5537 8.40756 11.4187C8.559 11.2838 8.78943 11.3011 8.95271 11.4214C9.20155 11.6047 9.49604 11.7209 9.80755 11.755C10.2417 11.8026 10.6781 11.6876 11.0324 11.4322C11.3867 11.1768 11.6338 10.7992 11.7258 10.3722C11.7919 10.0659 11.7748 9.74981 11.6796 9.45577C11.617 9.26283 11.6735 9.03877 11.8494 8.93775Z" fill="white"/>
                                <path d="M11.6797 8.68569C11.8394 8.56071 11.8692 8.3275 11.7222 8.18778C11.3671 7.8503 10.9183 7.62261 10.4304 7.53733C9.82122 7.43085 9.19416 7.55396 8.67043 7.88287C8.1467 8.21178 7.76346 8.72314 7.59478 9.31814C7.45969 9.79466 7.4699 10.2977 7.61966 10.7642C7.68165 10.9573 7.90466 11.0317 8.08662 10.9422C8.26857 10.8526 8.33924 10.6326 8.28915 10.436C8.21282 10.1365 8.21594 9.81995 8.30141 9.51846C8.42053 9.09826 8.69117 8.73714 9.06104 8.50486C9.43091 8.27258 9.87375 8.18564 10.304 8.26084C10.6127 8.31479 10.8992 8.44947 11.1358 8.64831C11.2911 8.77878 11.5199 8.81068 11.6797 8.68569Z" fill="white"/>
                                <circle cx="9.99996" cy="10" r="0.833333" fill="white"/>
                                <defs>
                                <filter id="filter0_i_2_865" x="0" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="4"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.615686 0 0 0 0 0.662745 0 0 0 0 0.694118 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_865"/>
                                </filter>
                                <radialGradient id="paint0_radial_2_865" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) rotate(180) scale(13.75 10)">
                                <stop stop-color="#C7CDD1"/>
                                <stop offset="1" stop-color="#97A4AD"/>
                                </radialGradient>
                                <linearGradient id="paint1_linear_2_865" x1="9.99996" y1="1.66669" x2="9.99996" y2="18.3334" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#AFBAC1"/>
                                <stop offset="1" stop-color="#83909A"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <p>03</p>
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_2_877)">
                                <circle cx="10" cy="10" r="10" fill="url(#paint0_radial_2_877)"/>
                                </g>
                                <circle cx="9.99996" cy="10" r="8.33333" fill="url(#paint1_linear_2_877)"/>
                                <path d="M13.2241 13.2241C13.3961 13.3961 13.6767 13.3972 13.8329 13.2107C14.4693 12.4511 14.8678 11.5165 14.9724 10.5244C15.0925 9.38583 14.8182 8.2405 14.1953 7.27984C13.5724 6.31918 12.6387 5.60138 11.5502 5.2464C10.6018 4.9371 9.58597 4.91957 8.63279 5.19055C8.39878 5.25708 8.28533 5.51373 8.37218 5.74098C8.45904 5.96823 8.71332 6.07956 8.94854 6.01746C9.71194 5.8159 10.5206 5.83726 11.2771 6.08398C12.1738 6.37642 12.943 6.96774 13.4561 7.75913C13.9692 8.55053 14.1952 9.49405 14.0963 10.432C14.0128 11.2234 13.7024 11.9703 13.2068 12.585C13.0541 12.7744 13.052 13.052 13.2241 13.2241Z" fill="white"/>
                                <path d="M12.2709 13.9537C12.3921 14.1647 12.32 14.4359 12.0992 14.538C11.1175 14.9921 10.0108 15.1173 8.94582 14.8876C7.73672 14.6268 6.6672 13.9271 5.94393 12.9237C5.22066 11.9204 4.89497 10.6845 5.02979 9.45497C5.14856 8.37197 5.61719 7.3616 6.35833 6.57387C6.52504 6.39668 6.80513 6.41399 6.96696 6.59563C7.12879 6.77728 7.11068 7.05429 6.94734 7.23459C6.36725 7.87491 6.00054 8.68476 5.90554 9.55101C5.79447 10.5639 6.06278 11.582 6.65861 12.4086C7.25444 13.2352 8.13551 13.8116 9.13156 14.0264C9.98342 14.2101 10.8677 14.1183 11.6585 13.7703C11.8812 13.6724 12.1497 13.7428 12.2709 13.9537Z" fill="white"/>
                                <path d="M11.8494 8.93775C12.0253 8.83673 12.2526 8.8968 12.3268 9.08557C12.506 9.54153 12.5482 10.0429 12.4438 10.5271C12.3134 11.1316 11.9636 11.6664 11.4619 12.028C10.9602 12.3897 10.3422 12.5525 9.72749 12.4851C9.23514 12.4311 8.77282 12.2325 8.39689 11.9184C8.24126 11.7883 8.25613 11.5537 8.40756 11.4187C8.559 11.2838 8.78943 11.3011 8.95271 11.4214C9.20155 11.6047 9.49604 11.7209 9.80755 11.755C10.2417 11.8026 10.6781 11.6876 11.0324 11.4322C11.3867 11.1768 11.6338 10.7992 11.7258 10.3722C11.7919 10.0659 11.7748 9.74981 11.6796 9.45577C11.617 9.26283 11.6735 9.03877 11.8494 8.93775Z" fill="white"/>
                                <path d="M11.6797 8.68569C11.8394 8.56071 11.8692 8.3275 11.7222 8.18778C11.3671 7.8503 10.9183 7.62261 10.4304 7.53733C9.82122 7.43085 9.19416 7.55396 8.67043 7.88287C8.1467 8.21178 7.76346 8.72314 7.59478 9.31814C7.45969 9.79466 7.4699 10.2977 7.61966 10.7642C7.68165 10.9573 7.90466 11.0317 8.08662 10.9422C8.26857 10.8526 8.33924 10.6326 8.28915 10.436C8.21282 10.1365 8.21594 9.81995 8.30141 9.51846C8.42053 9.09826 8.69117 8.73714 9.06104 8.50486C9.43091 8.27258 9.87375 8.18564 10.304 8.26084C10.6127 8.31479 10.8992 8.44947 11.1358 8.64831C11.2911 8.77878 11.5199 8.81068 11.6797 8.68569Z" fill="white"/>
                                <circle cx="9.99996" cy="10" r="0.833333" fill="white"/>
                                <defs>
                                <filter id="filter0_i_2_877" x="0" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="4"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.854736 0 0 0 0 0.657034 0 0 0 0 0.451093 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_877"/>
                                </filter>
                                <radialGradient id="paint0_radial_2_877" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) rotate(180) scale(13.75 10)">
                                <stop stop-color="#E3CAB0"/>
                                <stop offset="1" stop-color="#BA7D40"/>
                                </radialGradient>
                                <linearGradient id="paint1_linear_2_877" x1="9.99996" y1="1.66669" x2="9.99996" y2="18.3334" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E3CAB0"/>
                                <stop offset="1" stop-color="#A56F39"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <p>06</p>
                        </li>
                    </ul>
                    
                </div>
                <div className="head-profile-area">
                    <button className="menu-button btn" onClick={onToggleSidebar}>
                        <Icon name="menuHamburg" width={24} height={24} />
                    </button>
                    <div className="head-profile-area-inn">
                        <button className="icon-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6596 5.67794C20.1408 6.22368 20.5034 6.8674 20.7237 7.56672C20.9614 8.29783 21.0472 9.07162 20.9754 9.83856C20.9037 10.6055 20.6761 11.3487 20.3072 12.0205C19.0193 14.3407 16.4307 16.9341 12.6108 19.7273C12.4364 19.8546 12.2274 19.9231 12.0131 19.9231C11.7988 19.9231 11.5898 19.8546 11.4154 19.7273C7.57748 16.9289 4.98886 14.3354 3.70354 12.0179C3.3307 11.3453 3.09988 10.6003 3.02593 9.83091C2.95199 9.06154 3.03658 8.28487 3.27425 7.55095C3.49563 6.85381 3.85883 6.21245 4.33998 5.669C4.82113 5.12556 5.40934 4.69235 6.06595 4.39782C7.57234 3.7199 9.13271 3.90909 10.5774 4.96013C11.1092 5.35023 11.5873 5.81155 11.999 6.33174C12.4106 5.81155 12.8887 5.35023 13.4205 4.96013C14.8678 3.91434 16.4256 3.72253 17.932 4.40045C18.5896 4.69682 19.1784 5.1322 19.6596 5.67794Z" stroke="black" stroke-width="1.5"/>
                            </svg>
                        </button>
                        <button className="cart-icon-head icon-btn notify">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 20.0714L5.28 7.5H18.72L20 20.0714H4Z" stroke="black" stroke-width="1.5"/>
                            <path d="M15.4286 9.78573V6.35716C15.4286 4.46361 13.8935 2.92859 12 2.92859V2.92859C10.1064 2.92859 8.57141 4.46361 8.57141 6.35716V9.78573" stroke="black" stroke-width="1.5"/>
                            </svg>
                        </button>
                        <div className="dropdown">
                            <button className="btn d-flex align-items-center dropdown-toggle"
                                type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={avatar} alt="Profile" className="rounded-circle me-2" width="34" height="34" />
                                <span className="d-none d-md-inline">John Paul</span>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                <li><a className="dropdown-item" href="#">My Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
