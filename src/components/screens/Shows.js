import React ,{Fragment} from 'react'
import Showslist from "../layouts/showList";

function Shows() {
    return (
        <Fragment>
                <div style={{paddingLeft:"30px", position:'absolute',top:"850px", bottom:"2px", left:"0px", right:"0px"}}>
            <Showslist/>
            </div>
        </Fragment>
    )
}

export default Shows
