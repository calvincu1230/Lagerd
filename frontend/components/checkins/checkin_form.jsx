import React from "react";
import { withRouter } from "react-router-dom";

class CheckinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.userId,
      beerId: this.props.beerId,
      rating: 0,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleImgChange(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>{
      this.setState({ imgUrl: reader.result, imageFile: file });
    }


    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imgUrl: "", imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('checkin[author_id]', this.state.authorId);
    formData.append('checkin[beer_id]', this.state.beerId);
    formData.append('checkin[rating]', this.state.rating);
    formData.append('checkin[body]', this.state.body);
    
    if (this.state.imageFile) {
      formData.append('checkin[photo]', this.state.imageFile);
    }
    this.props.createCheckin(formData)
      .then(() => { 
        return this.props.closeCheckinModal();
      })
      .then(() => this.props.history.push("/feed"));
  }

  render() {
    const errors = this.props.errors;
    const ratingVal = this.state.rating ? (
      <>
        <p className="slider-amount">{this.state.rating}</p>
        <p className="stars">Stars</p> 
      </>
      ) : (<p className="stars">NO Rating</p>);
    const showErrors = Boolean(errors) && errors.length > 0 ? "show-errors" : "";
    const currentErrors = errors.map(error => {
        return <li key={error} className="errors-li">{error}</li>
    });

    let uploadedImg;
    let hidden = "";
    let imgClass = "checkin-temp-image";
    if (this.state.imgUrl) {
      hidden = "hide-img"
      imgClass = "checkin-real-image"
      uploadedImg = this.state.imgUrl;
    } else {
      uploadedImg = defaultCheckinImg;
    }

    return(
      <div className="checkin-form-container">
        <div className="checkin-form-top">
          <p className="checkin-title">Check-In</p>
          <p className="close-form" onClick={this.props.closeCheckinModal}>&#10005;</p>
        </div>
        <ul className={`errors-list ${showErrors}`}>{currentErrors}</ul>
        <form className="checkin-form" onSubmit={this.handleSubmit}>
          <div className="checkin-body-and-img">
            <textarea onChange={this.handleChange("body")} className="checkin-body" placeholder="What did you think?"/>
            <div className="checkin-img-preview" id={`${hidden}`}>
              <img className={imgClass} src={uploadedImg} />
              <input className="checkin-pic-input" type="file" onChange={this.handleImgChange} />
              <p className="photo-text">Add A Photo!</p>
            </div>
          </div>
          <div className="checkin-form-bottom">
            <div className="ratings-slider">
              <input 
                  className="slider" 
                  type="range" 
                  min="0" max="5" 
                  step=".25" 
                  value={this.state.rating}
                  onChange={this.handleChange("rating")}
                />
                <div className="slider-counter">
                  {ratingVal}
                </div>
            </div>
            <button className="checkin-submit-btn">Confirm</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CheckinForm);