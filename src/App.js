import React, { Component } from "react";
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {

      //page title
      textglobalTitle: 'This text is going to change after writing something on the text input',

      //title form
      title: 'This text is going to change after click on submit',

    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);

  }

  componentDidMount() {
    this.renderedForm();
  }

  renderedForm() {
    const consoleMessage = 'Rendered Form';
    console.log(consoleMessage);
  }

  onChange(e) {
    const newTitleDuringTheForm = 'Text changed';
    this.setState({
      textglobalTitle: newTitleDuringTheForm
    });
  }

  onClick(e) {
    e.preventDefault();
    const newTitleConsole = 'Title changed';
    this.setState({
      title: newTitleConsole
    });
    console.log(newTitleConsole);
  }

  render () {

     return(
      <>
        <div className="FormEmployee">
            <h1>Managing Lifecycle on React</h1>
            <h2> {this.state.textglobalTitle}</h2>
              <form>
                <fieldset>
                  <h2>{this.state.title}</h2>
                  <div className="form-data">
                    <label htmlFor="title">Input text </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      onChange = {this.onChange}
                      required
                    />
                  </div>
                  <hr />
                  <div className="form-data">
                    <input type="submit" onClick={this.onClick} value="Send"/>
                  </div>
                </fieldset>
              </form>
        </div>
      </>
      )
  }
}

export default App;
