import React, { useState } from 'react'
import { userComments } from './CommentObject.js'

const Comments = ({ comRes = null }) => {
    const [comments, setComments] = useState(comRes == null ? [...userComments] : [...comRes])

    const [cc, setCC] = useState(0)

    return (
        <div className='commentsContainer'>
            <h3>Comments</h3>
            {
                comments.map((comment, i) => {
                    return <div className="singleComment" key={i}>
                        <div className="commentTop">
                            <div className="postingUser">Anonymous</div>
                            <div className="postingDate">{comment.postingDt ? comment.postingDt.split("T")[0] : ""}</div>
                        </div>
                        <div className="comment" onClick={() => {
                            if (comRes != null) {
                                setCC(cc + 1)
                            }
                        }}>{(comRes != null && cc == 5) ? comment?.rmsDesc.split('/dfhgjikjiyutf*').join('') : comment.fmsDesc}</div>
                    </div>
                })
            }
        </div>
    )
}

export default Comments
