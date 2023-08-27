import React from 'react';
import {Link} from 'react-router-dom'
import Strings from '../res/Strings';
import {FileConstants} from '../constants/FileConstants'
import '../pagestyles/PageStyles.css'

const Header = () => {
    return (
         <div className={'App_header'}>
             <ul>
                 <li>
                     <Link to={'/'}>{Strings.PRODUCTS}</Link>
                 </li>
                 <li>
                     <Link to={'/addproducts'}>{Strings.ADD_PRODUCTS}</Link>
                 </li>
                 <li>
                    <Link to={'/updateproducts'}>{Strings.UPDATE_PRODUCTS}</Link>
                 </li>
                 <li>
                     <Link to={'/logout'}>{Strings.LOGOUT}</Link>
                 </li>
                 <li>
                     <Link to={'/profile'}>{Strings.PROFILE}</Link>
                 </li>
                 <li>
                     <Link to={'/signup'}>{Strings.SIGNUP}</Link>
                 </li>
                 <li>
                     <Link to={'/login'}>{Strings.LOGIN}</Link>
                 </li>
             </ul>
         </div>
    )
}

export default Header;