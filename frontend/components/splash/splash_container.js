import Splash from "./splash";
import { connect } from "react-redux";

const mSP = state => {
  return {
    state
  }
}

// const mDP = dispatch => {
  
// }

export default connect(mSP, null)(Splash);