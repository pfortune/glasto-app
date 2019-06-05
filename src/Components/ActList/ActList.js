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

  handleTitleClick(){
    alert("You clicked me");
  }

  render(){
    let acts = [];
    for(let i=3500; i <= this.state.data.length; i++){
      console.log(this.state.data[i]);
      //console.log(act.act);
      //acts.push(<Act name={act.act} stage={act.stage} date={act.date} time={act.start}></Act>);
    }

    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Act List</h1>
        <SearchParams />
        <Act name="Snow Patrol" stage="Pyramid" date="29/06/2019" time="5pm" />
      </div>
    );
  }
}

export default ActList;