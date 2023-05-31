import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="flex flex-row">
        <img
          className="ml-10 border-2 border-black object-contain"
          src={images[active]}
          alt="animal"
        />
        <div className="mx-8 grid grid-cols-4 items-center gap-x-8">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={
                index === active
                  ? "rounded-full border-2 border-black opacity-50 hover:cursor-pointer"
                  : "rounded-full border-2 border-black hover:cursor-pointer"
              }
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
