import React from 'react';
import axios from 'axios';


class FollowerCard extends React.Component{

    state = {
    user: [] 
    };

      
    componentDidMount(){
    axios.get('https://api.github.com/users/theolamide/followers')
    .then(res =>{
        console.log(res.data);
        this.setState({
        user: [res.data]       
        });      
    })
    .catch(err => console.log(err));
    }


    
    render (){
        
        return(
            <div className = "outsideLoopFollowerCard">
                {/* {this.state.user.map(followerUser => (
                    <div key={followerUser.id} className = "followerCard">
                        <>            
                            <img className = "avatar" src = {`${followerUser.avatar_url}`} alt="avatar"/>            
                            <div key = {followerUser.id}>
                                <h1>{followerUser.name} </h1>
                                <h3>login: {followerUser.login} </h3>
                                <h3>location: {followerUser.location} </h3>
                                <h3>github profile: {followerUser.html_url} </h3>
                                <h3>repositories: {followerUser.public_repos} </h3>
                            </div>
                        </>
                    </div> 
                ))} */}
            </div>
        )

    }

    
}

export default FollowerCard;