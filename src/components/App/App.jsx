import React from 'react';
import ResulContainer from '../../ResultContainer/ResultContainer';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

//class component

class App extends React.Component {
  state = {
    headerText: 'Name It!',
    headerExpanded: true,
    suggestedNames: [],
  };
  //régi módszer:
  // constructor() {
  //   super()
  //   this.state = {
  //     headerText: 'NameIt!'
  //   }
  // }

  handleInputChange = (inputText) => {
    //console.log('Input text: ', inputText);
    // this.setState({ headerExpanded: inputText.length > 0 ? false : true });
    //this.setState({ headerExpanded: !(inputText.length > 0) });
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };

  render() {
    console.log(name('cloud'));
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResulContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

//functionall component
// function App() {
//   return <h1>This is my funcional component</h1>;
// }

export default App;
