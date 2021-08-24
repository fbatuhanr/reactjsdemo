import React from 'react'
import PropTypes from 'prop-types'
import { motion } from "framer-motion"

const UserInfo = (props) => (
    <motion.div 
        initial={{ opacity: 0 }}    
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        >
        <h4>{props.title}</h4>
    </motion.div>
)

/*
function UserInfo() {
    return (
        <div>
            
        </div>
    )
}
*/

UserInfo.defaultProps = {
    title: "User Add Form Example"
}

UserInfo.propTypes = {
    title: PropTypes.string.isRequired
}

export default UserInfo;