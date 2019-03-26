import React from 'react'
import VideoDetail from '../Components/VideoDetail'
import CommentContainer from '../Containers/CommentContainer'
import { Route, Switch, withRouter } from 'react-router-dom';

class VideoDetailContainer extends React.Component{
    render(){
        return (
            <div id="video-detail-container">
                <VideoDetail selected={this.props.selected}/>
                <CommentContainer history={this.props.history}/>
            </div>
        )
    }
}

export default withRouter(VideoDetailContainer);
