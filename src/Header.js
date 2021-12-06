import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="//res.cloudinary.com/quantumart/image/upload/w_1400,f_auto/QA001/2020_0514.jpg"
          width="64"
          
          alt=""
        />
        Anxious Pleasures: Notes
        <img
          src="//res.cloudinary.com/quantumart/image/upload/w_1400,f_auto/QA001/2020_0418.jpg"
          width="64"
          
          alt=""
        />
      </header>
    );
  }
}
