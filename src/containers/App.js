import React,{ Component } from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Sticky from '../components/Sticky';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:''
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
        }

    onSearchChange=(event)=>{
        this.setState({searchField: event.target.value})
    }
    render(){
        const { robots, searchField} =this.state;
        const filteredRobots=robots.filter(robot=>robot.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                <Sticky>
                    <SearchBox searchChange={this.onSearchChange}/>
                </Sticky>
                <Cardlist robots={filteredRobots}/>
            </div>
        );
    } 
}

export default App;