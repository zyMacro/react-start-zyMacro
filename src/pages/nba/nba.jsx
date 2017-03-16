import React, {Component} from 'react' 
import ReactDOM from 'react-dom'

class Nba extends React.Component{
 constructor(){
    super();

    this.state = {
      name:'Kobe Bryant'
    };
    this.handleName=this.handleName.bind(this)
  }
  handleName(event){
    this.setState({name: event.target.value})
  }

  render(){
		return (
		<div>
		    <p>Who is your favorite NBA player?</p>
			<input type='text'  onChange={this.handleName}/>
			<p>{this.state.name+' is MVP'}</p>
		</div>)
	}
}
// ReactDOM.render(<Nba />,document.getElementById('app'))
export default Nba