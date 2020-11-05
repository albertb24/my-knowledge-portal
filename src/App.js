import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ArticleRecognition from './components/ArticleRecognition/ArticleRecognition';
import ArticleLinkForm from './components/ArticleLinkForm/ArticleLinkForm';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            route: 'SignIn',
            isSignedIn: false
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onButtonSubmit = () => {
        console.log('click');
        const apiUrl = 'https://dev81453.service-now.com/api/now/table/kb_knowledge?';
        fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }  
  
  onRouteChange = (route) => {
      if (route === 'signout') {
          this.setState({isSignedIn: false})
      } else if (route === 'home') {
          this.setState({isSignedIn: true})
      }
      this.setState({route: route});
  }


    render() {
        return (
            <div className="App">
                <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
                {
                this.state.route === 'home' 
                ? <div>
                <Logo />
                <ArticleLinkForm 
                onInputChange={this.onInputChange} 
                onSubmit={this.onButtonSubmit}
                />
                <ArticleRecognition />
                <ArticleRecognition />
                </div>
                : (
                   this.state.route === 'SignIn' 
                   ? <SignIn onRouteChange={this.onRouteChange}/>
                   : <Register onRouteChange={this.onRouteChange}/>
                )
             
    
            }
        </div>
        );
       
    }}

export default App;
