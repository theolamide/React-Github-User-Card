import React from 'react';
import axios from 'axios';


class UserCard extends React.Component{

    state = {
    user: []    
    };

      
    componentDidMount(){
    axios.get('https://api.github.com/users/theolamide')
    .then(res =>{
        console.log(res);
        this.setState({
        user: [res.data]        
        });      
    })
    .catch(err => console.log(err));
    }



    render (){
        return(
            <div className = "outsideLoopUserCard">
                {this.state.user.map(singleUser => (
                    <div key = {singleUser.id} className = "userCard">
                    <>  
                                     
                        <img className = "avatar" src = {`${singleUser.avatar_url}`} alt="avatar"/>            
                        <div>
                            <h1>{singleUser.name} </h1>
                            <h3>login: {singleUser.login} </h3>
                            <h3>location: {singleUser.location} </h3>
                            <h3>github profile: {singleUser.html_url} </h3>
                            <h3>repositories: {singleUser.public_repos} </h3>
                        </div>
                    
                    </>
                    </div> 
                ))}
            </div>
        )

    }

    
}

export default UserCard;