import React from "react";

const UserCard = (props) => {

    return (

    <div>
          <img width="200px" src={props.user.avatar_url}/>
          <h2>{props.user.login}</h2>
    </div>

    )}

export default UserCard;

