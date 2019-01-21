import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/App.sass';
// components
import Info from "./components/info";
import Form from "./components/form";
// import Wear from "./components/wear";
import ListItems from "./components/listitems";
// ключ
const API_KEY = "ac50efe8-6917-430e-9436-e5ef428283e1";

class App extends Component {

  //Данные полученнные с url запроса обект
  state = {
    // items: [],
    // name: undefined,
    // address: undefined,
    // coordinates: undefined,
    // time_clock: undefined,
    // url_site: undefined,
    // phones: undefined,
    items: [],
    error: undefined
  }

  // metods для вызова асинхронно
  gettingOrganization = async (event) => {
    // Убираем перезагрузку страниц
    event.preventDefault();

    const dataOrgan = event.target.elements.city.value;

    // переменная для получения инфо url 
    // fetch - альтернатива ajax запроса нашел на форумах
    const api_url = await fetch(`https://search-maps.yandex.ru/v1/?text=${dataOrgan}&type=biz&lang=ru_RU&apikey=${API_KEY}`);
    
    const data = await api_url.json();
    console.log(data)
    console.log(api_url.url)
    console.log(data.features[0].properties.id)
    console.log(data.features[1].properties.id)
    console.log(data.features[1])
    //обращаемся к обекту этого класса
    
    // .map


    this.setState({
    // //   name: data.properties.CompanyMetaData.name,
      error:'',
      items: data.features
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <Info/>
        {/* Передаем метод в компонент */}
        <p>Текст поискового запроса. Например, название географического объекта, адрес, координаты, название организации, телефон.</p>
        <Form OrganizationMethod={this.gettingOrganization} />
        <ListItems items={this.state.items}/>
      </div>
    );
  }
}
//  <Wear
// items={this.state.items}
// />
export default App;
