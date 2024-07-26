import { Link } from "react-router-dom";

// import React from "react";
export const Pet = ({ name, animal, breed, images, location, id }) => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, props.name),
  //   React.createElement("h2", {}, props.animal),
  //   React.createElement("h3", {}, props.breed),
  // ]);
  let aniamlImage = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    aniamlImage = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={aniamlImage} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};