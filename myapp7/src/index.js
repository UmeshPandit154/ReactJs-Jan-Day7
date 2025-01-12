//1. Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';


// You can define a react component using 2 technique
//1. Functional Component
function A(props){ // We will receivea formal argument
  let name="Umesh"; // Data is available withing component
  let surname2 = 'Rohit';
  //Every function return something
  return <h1>A {name} {props.surname} - <B surname={surname2} /></h1>; //JSX
}
//2. Class Component
//class Child extends Parent{}
class B extends React.Component{ //OOPs
  //1. Properties//Variable
  name='prajapati';

  //2. Constructor

  //3. methods
  render(){
    //Every function return something
    // In order to access any member of a class you have to use this.member
    //this .member
    return <span>B- {this.name} {this.props.surname} <C>Sharma</C> </span>
  }
}

//ES6 2015 Fat Arrow function

let C=(props)=>{
  let name='jitu';
  console.log('Hi',props);
  return <span>C - {name} {props.children} </span>

}

const root = ReactDOM.createRoot(document.getElementById('root'));

let sn = 'DOLOLR';
root.render(<A surname={sn} />);

