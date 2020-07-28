import React from "react";

export default ({ id, title, price, imageUrl, description }) => (
  <li>
    <div className="media card-body">
      <img
        className="book-image"
        src={imageUrl}
        alt={`book cover for ${title} book`}
      />
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  </li>
);
