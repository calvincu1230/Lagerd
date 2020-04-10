import React from "react";
import { STYLES } from "../../utils/beer_api_util";

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.beer;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.fetchBreweries();
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
    const path = this.state.id ? `/breweries/${this.state.breweryId}/beers/${this.state.id}` : `/breweries/${this.state.breweryId}/beers`;
    const formData = new FormData();
    if (this.state.id) {
      formData.append('beer[id]', this.state.id);
    }

    formData.append('beer[name]', this.state.name);
    formData.append('beer[brewery_id]', this.state.breweryId);
    formData.append('beer[style]', this.state.style);
    formData.append('beer[abv]', this.state.abv);
    formData.append('beer[ibu]', this.state.ibu);
    formData.append('beer[description]', this.state.description);
    
    if (this.state.imageFile) {
      formData.append('beer[photo]', this.state.imageFile);
    }
    this.props.action(formData).then(() => this.props.history.push(path));
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    const errors = this.props.errors;
    const showErrors = Boolean(errors) && errors.length > 0 ? "show-errors" : "";
    const currentErrors = errors.map(error => {
        return <li key={error} className="errors-li">{error}</li>
    });

    let uploadedImg;
    let hidden = "";
    if (this.state.imgUrl) {
      hidden = "hide-img"
      uploadedImg = this.state.imgUrl;
    } else {
      uploadedImg = defaultBeerPNG;
    }

    let brewerySelects; // adds varied amount of breweries as options and sets default one
    if (this.props.breweries) {
      brewerySelects = this.props.breweries.map(brewery => {
        return <option value={brewery.id} key={brewery.name}>{brewery.name}</option>
      });
    }

    const beerStyles = STYLES.map(style => {
      return <option className="style-option" value={style} key={style}>{style}</option>
    });
    // current will prefill data except brewery if coming from a the related beer page
    // maybe make separate forms rather than a shared one so its less confusing
    const defaultSelect = this.props.formType === "Add New Beer" ? (<option value="" key="select">Choose A Brewery</option>) : "";
    return (
      <div className="beer-form-outer">
        <div>
          <h3 className="beer-form-title">{this.props.formType}</h3>
          <h4 className="beer-form-sub">Didn't find what you were looking for? Use this form to add a new beer.</h4>
        </div>
        <ul className={`errors-list ${showErrors}`}>{currentErrors}</ul>
        <form className="beer-form" onSubmit={this.handleSubmit}>
          <div className="beer-name-line">
            <p className="beer-form-category">BEER NAME</p>
            <input className="beer-form-select-effect beer-form-item beer-name" type="text" value={this.state.name} onChange={this.handleChange("name")}/>
          </div>

          <div className="beer-form-section beer-brewery-line">
            <div className="brewery-select">
              <div className="suggest-brewery">
                <p className="beer-form-category">BREWERY NAME</p>
                <p className="email-text">
                  {/* Can't find a brewery? <a href="mailto: brewerysuggestions@lagerd.io" subject="Brewery Suggestion" className="orange-link">Suggest one here!</a> */}
                </p>
              </div>
              <select onChange={this.handleChange("breweryId")} value={this.state.breweryId} className="beer-form-item">
                {defaultSelect}
                {brewerySelects}
              </select>
            </div>
            <div className="img-preview" id={`${hidden}`}>
              <img className="real-image" src={uploadedImg} width="50px" height="50px" />
              <input className="pic-input" type="file" onChange={this.handleImgChange} />
              <p className="photo-text">Add A Photo!</p>
            </div>
          </div>

          <div className="beer-form-section beer-info-line">
            <div className="beer-form-abv">
              <p className="beer-form-category">ABV</p>
              <input className="beer-form-item beer-form-select-effect" type="number" step="0.01" value={this.state.abv} onChange={this.handleChange("abv")} min="0" max="67.5"/>
            </div>

            <div className="beer-form-ibu">
              <p className="beer-form-category">IBU</p>
              <input className="beer-form-item beer-form-select-effect" type="number" value={this.state.ibu} onChange={this.handleChange("ibu")} min="0" max="100"/>
            </div>

            <div className="beer-form-style">
              <p className="beer-form-category style-title">STYLE</p>
              <select className="style-option" onChange={this.handleChange("style")} value={this.state.style} className="beer-form-item">
                <option value="style-option" key="select">Choose A Style</option>
                {beerStyles}
              </select>
            </div>

          </div>

          <div className="beer-form-section">
            <p className="beer-form-category">DESCRIPTION</p>
            <textarea value={this.state.description} maxLength="750" className="beer-form-item beer-form-select-effect" onChange={this.handleChange("description")}/>
          </div>

          <button className="beer-form-btn">{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default BeerForm;