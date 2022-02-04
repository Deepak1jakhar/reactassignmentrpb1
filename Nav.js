import React from 'react';
import './Nav.css';
import NavContents from './NavContents';
import EmailIcon from '@material-ui/icons/Email';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuIcon from '@material-ui/icons/Menu';


function Nav(){
    return(
        <div className='nav_container'>
            <div className='nav_left'>
            <NavContents Icon={MenuIcon} />
            <img src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png" alt="Gmail" title='Gmail'/>
                <div className='search_box'>
                <input type='text' placeholder='Search Mail'/>
                </div>
            </div>
            <div className='nav_right'>
                <NavContents Icon={EmailIcon} title="Gmail"/>  
                <NavContents Icon={DraftsIcon} title="Drafts"/>
            </div>
        </div>
    );
    }
    export default Nav;