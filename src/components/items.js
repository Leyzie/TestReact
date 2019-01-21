import React from "react";
// import logo from './logo.svg';
// import './App.sass';

class Items extends React.Component {
 
   state = {
        isOpen: false
    }
   handleClick = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
   }
  render() {
    const {items} = this.props
    const informs = this.state.isOpen &&<div>{items.properties.CompanyMetaData.coordinates}</div>
                                        
    return (
      <div className="Items">
        <h2>
            {items.properties.CompanyMetaData.name}
            <button onClick={this.handleClick}>
                {this.state.isOpen ? 'close' : 'open'}
            </button>
        </h2>
        <div>
            <div>{items.properties.CompanyMetaData.address}</div>
            <div>{items.properties.CompanyMetaData.Hours.State.short_text}</div>
            <div>{items.properties.CompanyMetaData.url}</div>
            <div>{items.properties.CompanyMetaData.phones}</div>
        </div>
         {informs}    
      </div>
    );
  }
}

export default Items;
