import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
  };

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//res.cloudinary.com/quantumart/image/upload/w_1400,f_auto/QA001/${this.props.symbol}.jpg`;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.symbol} src={src} />
        <span className="title">{this.props.symbol + ": " + this.props.title}</span>
      </div>
    );
  }
}
