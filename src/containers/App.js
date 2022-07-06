import React,{ Component } from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Sticky from '../components/Sticky';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:''
        };
        // this.onSearchChange=this.onSearchChange.bind(this);
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
                <Sticky id='stickysearch'>
                    <SearchBox searchChange={this.onSearchChange}/>
                </Sticky>
                <ErrorBoundary>
                    <Cardlist robots={filteredRobots}/>
                </ErrorBoundary>
            </div>
        );
    } 
}

export default App;