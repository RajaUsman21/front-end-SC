// import React, { useState } from 'react'
import UserHeader from './UserHeader'
import Header from './Header'
import Footer from './Footer'
// import { useSelector } from "react-redux"

function getUser() {
    return localStorage.getItem('token')
}

const HeaderFooterRoute = (props) => {
    // const [user, setUser] = useState(getUser())

    return (
        <>
            {/* {user ? <> */}
                <UserHeader></UserHeader>
                {props.children}
                <Footer></Footer>
            {/* </> : <> */}
                {/* <Header></Header>
                {props.children}
                <Footer></Footer> */}

        


        </>
    )
}

export default HeaderFooterRoute