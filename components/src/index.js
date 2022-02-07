import faker from "faker";
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard >
        <div>
          <h4>Warning</h4>
          Are u sure?
        </div>
      </ApprovalCard>
      
      <ApprovalCard >
        <CommentDetail 
          author="Sam" 
          timesAgo="4:45pm" 
          content="Nice" 
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard >
        <CommentDetail 
          author="Alex" 
          timesAgo="6:45pm" 
          content="good" 
          avatar={faker.image.image()}
        />
      </ApprovalCard>

       <ApprovalCard >
        <CommentDetail 
          author="Jane" 
          timesAgo="4:00pm" 
          content="great" 
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
