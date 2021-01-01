import React, { Fragment } from 'react'
import logo from '../../images/8.webp'
import top10 from '../../images/top10.svg'
import play from '../../images/play.svg'
import excla from '../../images/excla.svg'

function FeaturedScreen() {
    return (
        <Fragment>
            <div class="jumbotron jumbotron-fluid">
    <div class="container row" style={{marginLeft:"20px", marginTop:"200px"}}>
    <div className="col-6 text-left">
        <img src={logo}/>
        <div className="sides">
        <img src={top10} height={50} width={50}/>
        <p class="lead text-white logotext1" style={{marginLeft:"10px"}}>#9 in TV Shows Today</p>
        </div>
        <p className="text-white logotext">Intelligent, charming, completely ruthless. He's turning himself in to the FBI. With a few conditions.</p>
        <p class="lead" style={{display:'flex'}}>
        <div>
            <a class="btn bg-white btn-lg extender" href="Jumbo action link" role="button"><img src={play} width={50} height={50}/> Play</a>
            </div>
        <div style={{paddingLeft:"15px", height:"40px"}}>
            
            <a class="btn bg-dark btn-lg text-white extender" href="Jumbo action link" role="button" ><img src={excla} width={50} height={50}/> More Info</a>
            </div>
        </p>
        </div>
    </div>
</div>
        </Fragment>
    )
}

export default FeaturedScreen