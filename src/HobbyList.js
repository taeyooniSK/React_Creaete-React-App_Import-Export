import React, { Component } from 'react';

class HobbyList extends Component {
    render(){
        const hobbies = ["Sleeping", "Eating", "Playing"];
        return(
            <ul>
                {hobbies.map( (hobby, i) => {
                    return <li key={i}>{hobby}</li>;
                })}
            </ul>
        )
    }
};

export default HobbyList;