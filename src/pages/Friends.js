import React, { Component } from "react"
class Friends extends Component {
render() {
    return (
        <div className="main">
            <div className="mainDiv">

<form>
<h3>Find your friends!</h3>
<fieldset className="form-group">
  <label>Friend's Name:</label>
  <input
    type="text"
    ref="name"
    name="name"
    className="form-control"
  />
</fieldset>

<fieldset className="form-group">
  <label>Friend's Location:</label>
  <input
    type="text"
    ref="age"
    name="age"
    className="form-control"
  />
</fieldset>
<button className="btn btn-success" type="submit">
  Save Friend
</button>
</form>
</div>
</div>
);
}
}
export default Friends



