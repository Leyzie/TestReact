import React from "react";
// import logo from './logo.svg';
// import './App.sass';

class Wear extends React.Component {
  render() {
    return (
      <div className="Wear">
        <p>Wear</p>
          {this.props.items.map(items =>
            <div key={items.properties.id}>
              <span>{items.properties.CompanyMetaData.name}</span>
            </div>
          )}
      </div>
    );
  }
}

export default Wear;
