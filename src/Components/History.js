import React, { Component } from 'react'
import { withRouter } from "react-router-dom";


class History extends Component {
   

    render(){
        const arrVideoCard= this.props.userHistories.map((his,idx) => {
            return (
                <div key={idx} className="video-card">
                    <div className="video-img">
                        <img alt='pic' src={his.img_url} onClick={()=>this.props.handleHisImgClick(his)}/>
                    </div>
                    <div className="video-card-detail">
                         <p>{his.title}</p>
                    </div>
                    
                </div>
            )
        })
        return(
            <div>
                {arrVideoCard}
            </div>
        )
    }
}

export default withRouter(History);