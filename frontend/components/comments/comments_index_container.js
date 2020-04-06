import { connect } from "react-redux";
import CommentsIndex from "./comments_index";

const mSP = state => {
  return {
    comments: state.entities.comments,
    
  };
};

const mDP = dispatch => {
  return {
    // delete, update, etc

  };
};

export default connect(mSP, mDP)(CommentsIndex);