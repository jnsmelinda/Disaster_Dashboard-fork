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
        <input type="checkbox" value="water" name="water" /> Water
        <br></br>
        <input type="checkbox" value="food" name="food" /> Non-perishable food
        <br></br>
        <input type="checkbox" value="batteries" name="batteries" /> Batteries
        <br></br>
        <input type="checkbox" value="flashlight" name="flashlight" /> Flashlight
        <br></br>
        <input type="checkbox" value="first_aid_kit" name="first_aid_kit" /> First Aid Kit
        <br></br>
        <input type="checkbox" value="whistle" name="whistle" /> whistle
        <br></br>
        <input type="checkbox" value="dust_mask" name="dust_mask" /> Dust Mask
        <br></br>
        <input type="checkbox" value="moist_towlettes" name="moist_towlettes" /> Moist Towlettes
        <br></br>
        <input type="checkbox" value="garbadge_bag" name="garbadge_bag" /> Garbadge Bag
        <br></br>
        <input type="checkbox" value="wrench" name="wrench" /> Wrench
        <br></br>
        <input type="checkbox" value="can_opener" name="can_opener" /> Can Opener
        <br></br>
        <input type="checkbox" value="local_map" name="local_map" /> Local Map
        <br></br>
        <input type="checkbox" value="cash" name="cash" /> Cash
        <br></br>
        <input type="checkbox" value="medications" name="medications" /> Medications

         {/* {"id: " + this.state.readyKit.id}<br></br>
        {"username: " + this.state.readyKit.currentUserName}<br></br>
        {"water: " + this.state.readyKit.water}<br></br>
        {"non perishable food: " + this.state.readyKit.non_perishable_food}<br></br>
        {"batteries: " + this.state.readyKit.batteries}<br></br>
        {"flashlight: " + this.state.readyKit.flashlight}<br></br>
        {"first aid kit: " + this.state.readyKit.first_aid_kit}<br></br>
        {"whistle: " + this.state.readyKit.whistle}<br></br>
        {"dust mask: " + this.state.readyKit.dust_mask}<br></br>
        {"moist towlettes: " + this.state.readyKit.moist_towlettes}<br></br>
        {"garbadge bags: " + this.state.readyKit.garbadge_bags}<br></br>
        {"wrench: " + this.state.readyKit.wrench}<br></br>
        {"can opener: " + this.state.readyKit.can_opener}<br></br>
        {"local map: " + this.state.readyKit.local_map}<br></br>
        {"cash: " + this.state.readyKit.cash}<br></br>
        {"medications: " + this.state.readyKit.medications}<br></br> */}
      </div>
    );
  }
}

export default ReadyKit;
