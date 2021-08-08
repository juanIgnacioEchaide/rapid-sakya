import React from 'react'
import NavBar from '../navbar/index';
import PropTypes from 'prop-types';
import Login from '../login/index';

const layout = ({children, size}) => {
 
    const loginSelected = false;

    return (
        <div>
            <NavBar size={size} />
            {children}
        </div>
    )
}

layout.propTypes = {

}
export default layout

