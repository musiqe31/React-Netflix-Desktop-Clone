import React, { Fragment } from 'react'
import Navbar from '../layouts/Navbar'
import FeatureScreen from '../layouts/FeaturedScreen'

function Header() {
    return (
        <Fragment>
            <Navbar/>
            <FeatureScreen/>
        </Fragment>
    )
}

export default Header