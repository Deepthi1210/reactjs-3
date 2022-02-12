import React from "react";
import  ReactDOM  from "react-dom";
import CommentBox from "./CommentBox";
const App=() => {

    return(
    <CommentBox />
    )
}

ReactDOM.render(
      <div>
      <App />
      </div>,
    document.getElementById("root")
);