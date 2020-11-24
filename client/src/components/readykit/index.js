import API from "../../utils/API";
import React from 'react';

class ReadyKit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readyKit: {}
    };
    API.getReadyKitByUser(this.props.username)
      .then(res => this.setState({ readyKit: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <input type="checkbox" value="water" name="water" onClick={() => this.handleClick()}/> Water
        <br></br>
        <input type="checkbox" value="food" name="food" onClick={() => this.handleClick()}/> Non-perishable food
        <br></br>
        <input type="checkbox" value="batteries" name="batteries" onClick={() => this.handleClick()}/> Batteries
        <br></br>
        <input type="checkbox" value="flashlight" name="flashlight" onClick={() => this.handleClick()}/> Flashlight
        <br></br>
        <input type="checkbox" value="first_aid_kit" name="first_aid_kit" onClick={() => this.handleClick()}/> First Aid Kit
        <br></br>
        <input type="checkbox" value="whistle" name="whistle" onClick={() => this.handleClick()}/> Whistle
        <br></br>
        <input type="checkbox" value="dust_mask" name="dust_mask" onClick={() => this.handleClick()}/> Dust Mask
        <br></br>
        <input type="checkbox" value="moist_towlettes" name="moist_towlettes" onClick={() => this.handleClick()}/> Moist Towlettes
        <br></br>
        <input type="checkbox" value="garbadge_bag" name="garbadge_bag" onClick={() => this.handleClick()}/> Garbadge Bag
        <br></br>
        <input type="checkbox" value="wrench" name="wrench" onClick={() => this.handleClick()}/> Wrench
        <br></br>
        <input type="checkbox" value="can_opener" name="can_opener" onClick={() => this.handleClick()}/> Can Opener
        <br></br>
        <input type="checkbox" value="local_map" name="local_map" onClick={() => this.handleClick()}/> Local Map
        <br></br>
        <input type="checkbox" value="cash" name="cash" onClick={() => this.handleClick()}/> Cash
        <br></br>
        <input type="checkbox" value="medications" name="medications" onClick={() => this.handleClick()}/> Medications
      </div>
    );
  }
}

export default ReadyKit;
