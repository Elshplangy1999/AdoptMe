import { Component } from 'react';

export default class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    imaegs: ['https://pets-images.dev-apis.com/pets/none.jpg'],
  };

  // handleClick(e) {
  //   this.setState({
  //     active: e.target.dataset.index
  //   });
  //   console.log(this); =======> undefined
  //   الحل نخلي الفانكشن أرو فانكشن
  // }

  handleClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            <img
              src={image}
              alt="animal"
              onClick={this.handleClick}
              data-index={index}
              key={image}
              className={index === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    );
  }
}
