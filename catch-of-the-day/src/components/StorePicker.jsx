import React from "react";
import { getFunName } from "../helpers.js";

class StorePicker extends React.Component {
  goToStore = e => {
    e.preventDefault();
    console.log(this.storeInput.value);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store Name</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
