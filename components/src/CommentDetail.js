import React from "react";


const CommentDetail = (props) => {
  // console.log(props);
  return (
    //   each comment 
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metedata">
        <span className="date">{props.timesAgo}</span>
      </div>
      <div className="text">Nice blog post!</div>
    </div>
  );
};

export default CommentDetail;
