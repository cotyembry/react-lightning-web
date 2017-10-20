import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';
import Button from './components/Button';
import Badge from './components/Badge';
import TextArea from './components/TextArea';
import TextFieldInput from './components/TextFieldInput';
import TextField from './components/TextFieldInput';



//start cotyembry added 10-20-2017
import AccordianShowHide from './components/AccordianShowHide';
import ToggleIcon from './components/ToggleIcon';
//end cotyembry added 10-20-2017


class App extends Component {
  render() {
    return (
      <div className="App">
        <TextField label="Label" placeholder="Default Placeholder" />


    	{/* toggleButton can be a src (to reference an image file ex: '../../images/example.png') or a custom component*/}
        <AccordianShowHide ToggleIcon={<ToggleIcon />} sections={['One', 'Two', 'Three']} />


      </div>
    );
  }
}

export default App;
