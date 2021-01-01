import React, { Fragment } from 'react'
import netflix from '../../images/netflix.png'
import mag from '../../images/mag.png'
import bell from '../../images/bell.png'
import gift from '../../images/gift.png'
import smile from '../../images/smile.svg'

function Navbar() {
    return (
        <Fragment>
                    <div style={{position:'relative'}}>

        <nav class="navbar navbar-expand-sm" style={{position:"fixed", width:"100%",zIndex:1}}>
    <a class="navbar-brand" href="#"><img src={netflix} height={50} width={100}/></a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">TV Shows</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">Movies</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">Latest</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">My List</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link text-white" href="#"><img src={mag} height={25} width={25}/><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">KIDS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">DVD</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#"><img src={gift} height={25} width={25}/></a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#"><img src={bell} height={25} width={25}/></a>
            </li>
            <li class="nav-item" style={{marginRight:"30px"}}>
                <a class="nav-link text-white" href="#"><img src={smile} height={30} width={30}/> <span style={{fontSize:"10px"}}>▼</span></a>
            </li>
        </ul>
        </form>
    </div>
</nav>
</div>
        </Fragment>
    )
}

export default Navbar
