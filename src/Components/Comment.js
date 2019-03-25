import React from 'react'

const Comment = (props) => {
    const arrOfComment = props.comments.map((comment, idx) => <div className="comment" key={idx}><h3>*username*</h3>

    <p>{comment}</p></div>);

    return (
        <div className="comments">
            {arrOfComment}
        </div>
    )
}

export default Comment
