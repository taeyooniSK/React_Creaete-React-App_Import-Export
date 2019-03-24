import React, { Component } from 'react';
import './Pet.css';

class Pet extends Component {
    render(){
        return (
            <div className="card">
                <h2 className="name">Bongsun</h2>
                <img src="https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/22QT/image/Yk4eMRY4JI3hd1rGUApUv8y8Lv0.jpg" alt="Bongsun"/>
            </div>
        )
    }    

}

export default Pet;