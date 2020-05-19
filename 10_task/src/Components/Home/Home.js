/* import React from "react";
//import "./Home.css";

const Home = () => {
  return (
    <div className="welcome">
      <h1>Welcome to my home page</h1>
    </div>
  );
};

export default Home;
 */

import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import "./Home.css"



const FormPage = () => {
return (
  <div className="contact">
<MDBContainer >

  <MDBRow >
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Contact Me</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn type="submit" outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
    <div className="laptop">
    <img className="laptop" alt="laptop" src="laptop.jpg" />
  
</div>
  </MDBRow>
</MDBContainer>
</div>

);
};

export default FormPage;