import React from "react";
class App extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = { };
  }
  componentDidMount()
  {
    this.getData();
  }
  saveData()
  {
    var user ={
      name:"Saloni",
      gender:"Female"
    }
    var a = JSON.stringify(user);
    localStorage.setItem("mydata",a);
    this.setState({msg:"Value Stored"})
  }
  getData()
  {
    var a = localStorage.getItem("mydata");
    if(a)
    {
      var data =JSON.parse(a);
      this.setState({msg:"Value is: "+data.name  +data.gender})

    }
    else
    {
      this.setState({msg:"Value Not Present"})
    }
  }
  removeData()
  {
    localStorage.clear();
    this.setState({msg:"Value Removed"})
  }
  render()
  {
     return(
      <>
      {this.state.msg}
      <br />
      <br />
      <input type="button" onClick={this.saveData.bind(this)} value="Save" />
      <input type="button" onClick={this.getData.bind(this)} value="Get" />
      <input type="button" onClick={this.removeData.bind(this)} value="Remove" />
      <br /> 
      </>
    );
  }
}


export default App;
