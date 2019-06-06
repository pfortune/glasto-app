import React from "react";
import Act from "./Act";
import SearchParams from "./SearchParams";

class ActList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      name: this.props.name
    };
  }

  handleTitleClick() {
    alert("You clicked me");
  }

  render() {
    let acts = [];
    for (let i = 3500; i < this.state.data.length; i++) {
      let act = this.state.data[i];

      acts.push(
        <Act
          name={act.act}
          stage={act.stage}
          date={act.date}
          time={act.start}
          key={i}
        />
      );
    }

    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Act List</h1>
        <SearchParams />
        {acts}
      </div>
    );
  }
}

export default ActList;
