import React from "react";
// import logo from './logo.svg';
// import './App.sass';
import Items from "./items"

class ListItems extends React.Component {
  render() {
    const iremsprops = this.props.items
    console.log(iremsprops)
    const OrganisationItems = iremsprops.map((iremsprops, index) =>
       <div key = {index}> <Items items={iremsprops} /></div>
      )
    return (
      <div className="ListItems">
        {OrganisationItems}
      </div>
    );
  }
}

export default ListItems;
