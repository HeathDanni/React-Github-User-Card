import React from "react";

const UserCard = (props) => {

    return (

    <div className="cards">
        <a href={props.user.html_url} target="_blank">
          <img width="200px" src={props.user.avatar_url}/>
          <h2>{props.user.login}</h2>
        </a>
    </div>

    )}

export default UserCard;

