import "bootswatch/dist/minty/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './profile.css';

export default function Profile () {
    const goTo = useNavigate();
    return(
      <>
      
  <ol class="breadcrumb">
    <li class="breadcrumb-item active">Profile</li>
                 <div className="back-button"> 
                <button onClick={() => goTo("//home")} class="btn btn-dark"> Back </button>
            </div>
  </ol>

  <div class="card">
    <div class="card-body">
      
      <div class="names">
        <h4 class="card-title">"Test User"</h4>
        <h6 class="card-subtitle mb-2 text-muted">@test_user</h6>
      </div>

      <div class="social">
        <strong class="followers"> Followers </strong>
        <strong class="follower_count"> 0 </strong>
        <strong class="following"> Following </strong>
        <strong class="following_count"> 0 </strong>
      </div>
      
      <div class="info">
        <hr />
        <p class="card-text"> <strong>Biography: </strong>Here is a little bit about me. I am a second year at SDSU looking to make more friends.</p>
        <p class="standing"> <strong>Class standing: </strong>Sophomore </p>
        <p class="major"> <strong>Major: </strong>Computer science</p>
        <p class ="courses"> <strong>Courses: </strong> CS 150, CS 210, BIOL 100</p>
      </div>

      <div class="link-info"> 
        <hr />
        <p class="link"> Links: </p>
        <a href="#" class="card-link">LinkedIn</a>
        <a href="#" class="card-link">Portfolio</a>
      </div>

      <div class="save-button"> 
        <hr />
        <button type="button" class="btn btn-primary">Save</button>
      </div>

    </div>
  </div>

</>
    );

}