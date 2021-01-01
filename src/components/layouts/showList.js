import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import movie1 from '../../images/1.jpg'
import movie2 from '../../images/2.webp'
import movie3 from '../../images/3.jpg'
import movie4 from '../../images/4.jpg'
import movie5 from '../../images/5.webp'
import movie6 from '../../images/7.jpg'
import movie7 from '../../images/9.jpg'
import movie8 from '../../images/10.webp'
import movie9 from '../../images/11.webp'
import movie10 from '../../images/12.webp'
import movie11 from '../../images/13.jpg'
import movie12 from '../../images/14.jpg'
import movie13 from '../../images/15.jpg'
import movie14 from '../../images/16.jpg'
import sidebar from '../../images/midad.webp'
import logo from '../../images/8.webp'
import top10 from '../../images/top10.svg'
import play from '../../images/play.svg'
import excla from '../../images/excla.svg'
import Footer from './Footer'

function showList() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return <Fragment>
  <h2 className="text-white text-left">My List</h2>
<Carousel responsive={responsive}>
  <div className="netclick"><img alt="alt" src={movie1}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
  <div className="netclick"><img alt="alt" src={movie3}/></div>
  <div className="netclick"><img alt="alt" src={movie4}/></div>
  <div className="netclick"><img alt="alt" src={movie5}/></div>
  <div className="netclick"><img alt="alt" src={movie6}/></div>
  <div className="netclick"><img alt="alt" src={movie7}/></div>
  <div className="netclick"><img alt="alt" src={movie8}/></div>
  <div className="netclick"><img alt="alt" src={movie9}/></div>
  <div className="netclick"><img alt="alt" src={movie10}/></div>
  <div className="netclick"><img alt="alt" src={movie11}/></div>
  <div className="netclick"><img alt="alt" src={movie12}/></div>
  <div className="netclick"><img alt="alt" src={movie13}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
</Carousel>
<br/><br/>
<h2 className="text-white text-left">Popular on Netflix</h2>
<Carousel responsive={responsive}>
  <div className="netclick"><img alt="alt" src={movie13}/></div>
  <div className="netclick"><img alt="alt" src={movie12}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
  <div className="netclick"><img alt="alt" src={movie11}/></div>
  <div className="netclick"><img alt="alt" src={movie10}/></div>
  <div className="netclick"><img alt="alt" src={movie9}/></div>
  <div className="netclick"><img alt="alt" src={movie8}/></div>
  <div className="netclick"><img alt="alt" src={movie7}/></div>
  <div className="netclick"><img alt="alt" src={movie6}/></div>
  <div className="netclick"><img alt="alt" src={movie5}/></div>
  <div className="netclick"><img alt="alt" src={movie4}/></div>
  <div className="netclick"><img alt="alt" src={movie3}/></div>
  <div className="netclick"><img alt="alt" src={movie2}/></div>
  <div className="netclick"><img alt="alt" src={movie1}/></div>
</Carousel>
  <h2 className="text-white text-left">Continue Watcing for Charles</h2>
<Carousel responsive={responsive}>
<div className="netclick"><img alt="alt" src={movie1}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
  <div className="netclick"><img alt="alt" src={movie3}/></div>
  <div className="netclick"><img alt="alt" src={movie4}/></div>
  <div className="netclick"><img alt="alt" src={movie5}/></div>
  <div className="netclick"><img alt="alt" src={movie6}/></div>
  <div className="netclick"><img alt="alt" src={movie7}/></div>
  <div className="netclick"><img alt="alt" src={movie8}/></div>
  <div className="netclick"><img alt="alt" src={movie9}/></div>
  <div className="netclick"><img alt="alt" src={movie10}/></div>
  <div className="netclick"><img alt="alt" src={movie11}/></div>
  <div className="netclick"><img alt="alt" src={movie12}/></div>
  <div className="netclick"><img alt="alt" src={movie13}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
</Carousel>
<br/><br/>
<h2 className="text-white text-left">Trending Now</h2>
<Carousel responsive={responsive}>
<div className="netclick"><img alt="alt" src={movie13}/></div>
  <div className="netclick"><img alt="alt" src={movie12}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
  <div className="netclick"><img alt="alt" src={movie11}/></div>
  <div className="netclick"><img alt="alt" src={movie10}/></div>
  <div className="netclick"><img alt="alt" src={movie9}/></div>
  <div className="netclick"><img alt="alt" src={movie8}/></div>
  <div className="netclick"><img alt="alt" src={movie7}/></div>
  <div className="netclick"><img alt="alt" src={movie6}/></div>
  <div className="netclick"><img alt="alt" src={movie5}/></div>
  <div className="netclick"><img alt="alt" src={movie4}/></div>
  <div className="netclick"><img alt="alt" src={movie3}/></div>
  <div className="netclick"><img alt="alt" src={movie2}/></div>
  <div className="netclick"><img alt="alt" src={movie1}/></div>
</Carousel>
  <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", margin:"0"}}>
      <div>
      <iframe width="1000" height="506" src="https://www.youtube.com/embed/ZU9ZtlkSnnE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div style={{display:'flex', alignItems:'center', justifyContent:"center", flexDirection:'column', height:"90%"}}>
      <img src={sidebar} height={300} width={550}/>
      <p class="lead" style={{display:'flex', flexDirection:"row"}}>
        <div>
            <a class="btn bg-white btn-lg extender" href="Jumbo action link" role="button"><img src={play} width={50} height={50}/> Play</a>
            </div>
        <div style={{paddingLeft:"15px", height:"40px"}}>
            
            <a class="btn bg-dark btn-lg text-white extender" href="Jumbo action link" role="button" ><img src={excla} width={50} height={50}/> More Info</a>
            </div>
        </p>
      <div className="col-6 text-left">
        <div className="sides" style={{margin:"0px"}}>
        <img src={top10} height={50} width={50}/>
        <p class="lead text-white" style={{marginLeft:"10px"}}>#1 in the U.S. Today</p>
        </div>
        <p className="text-white">Angel of mercy. Master manipulator. Meet Nurse Mildred Ratched: a monster in the making.</p>
        </div>
      </div>      
      </div>

      <h2 className="text-white text-left">My List</h2>
<Carousel responsive={responsive}>
  <div className="netclick"><img alt="alt" src={movie1}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
  <div className="netclick"><img alt="alt" src={movie3}/></div>
  <div className="netclick"><img alt="alt" src={movie4}/></div>
  <div className="netclick"><img alt="alt" src={movie5}/></div>
  <div className="netclick"><img alt="alt" src={movie6}/></div>
  <div className="netclick"><img alt="alt" src={movie7}/></div>
  <div className="netclick"><img alt="alt" src={movie8}/></div>
  <div className="netclick"><img alt="alt" src={movie9}/></div>
  <div className="netclick"><img alt="alt" src={movie10}/></div>
  <div className="netclick"><img alt="alt" src={movie11}/></div>
  <div className="netclick"><img alt="alt" src={movie12}/></div>
  <div className="netclick"><img alt="alt" src={movie13}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
</Carousel>
<br/><br/>
<h2 className="text-white text-left">Popular on Netflix</h2>
<Carousel responsive={responsive}>
  <div className="netclick"><img alt="alt" src={movie13}/></div>
  <div className="netclick"><img alt="alt" src={movie12}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
  <div className="netclick"><img alt="alt" src={movie11}/></div>
  <div className="netclick"><img alt="alt" src={movie10}/></div>
  <div className="netclick"><img alt="alt" src={movie9}/></div>
  <div className="netclick"><img alt="alt" src={movie8}/></div>
  <div className="netclick"><img alt="alt" src={movie7}/></div>
  <div className="netclick"><img alt="alt" src={movie6}/></div>
  <div className="netclick"><img alt="alt" src={movie5}/></div>
  <div className="netclick"><img alt="alt" src={movie4}/></div>
  <div className="netclick"><img alt="alt" src={movie3}/></div>
  <div className="netclick"><img alt="alt" src={movie2}/></div>
  <div className="netclick"><img alt="alt" src={movie1}/></div>
</Carousel>
  <h2 className="text-white text-left">Continue Watcing for Charles</h2>
<Carousel responsive={responsive}>
<div className="netclick"><img alt="alt" src={movie1}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
  <div className="netclick"><img alt="alt" src={movie3}/></div>
  <div className="netclick"><img alt="alt" src={movie4}/></div>
  <div className="netclick"><img alt="alt" src={movie5}/></div>
  <div className="netclick"><img alt="alt" src={movie6}/></div>
  <div className="netclick"><img alt="alt" src={movie7}/></div>
  <div className="netclick"><img alt="alt" src={movie8}/></div>
  <div className="netclick"><img alt="alt" src={movie9}/></div>
  <div className="netclick"><img alt="alt" src={movie10}/></div>
  <div className="netclick"><img alt="alt" src={movie11}/></div>
  <div className="netclick"><img alt="alt" src={movie12}/></div>
  <div className="netclick"><img alt="alt" src={movie13}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
</Carousel>
<br/><br/>
<h2 className="text-white text-left">Trending Now</h2>
<Carousel responsive={responsive}>
<div className="netclick"><img alt="alt" src={movie13}/></div>
  <div className="netclick"><img alt="alt" src={movie12}/></div>
  <div className="netclick"><img alt="alt" src={movie14}/></div>
  <div className="netclick"><img alt="alt" src={movie11}/></div>
  <div className="netclick"><img alt="alt" src={movie10}/></div>
  <div className="netclick"><img alt="alt" src={movie9}/></div>
  <div className="netclick"><img alt="alt" src={movie8}/></div>
  <div className="netclick"><img alt="alt" src={movie7}/></div>
  <div className="netclick"><img alt="alt" src={movie6}/></div>
  <div className="netclick"><img alt="alt" src={movie5}/></div>
  <div className="netclick"><img alt="alt" src={movie4}/></div>
  <div className="netclick"><img alt="alt" src={movie3}/></div>
  <div className="netclick"><img alt="alt" src={movie2}/></div>
  <div className="netclick"><img alt="alt" src={movie1}/></div>
</Carousel>
<Footer/>
  </Fragment>;
}

export default showList;
