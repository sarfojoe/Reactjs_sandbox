import React from 'react';
import './Form.css';

const Form = (props) => {
   
      return (
        <div className="form-wrap">
          <label>
            First Name:
            <input type="text" id="firstname" name="firstname"/>
          </label>
          <label>
            Last Name:
            <input type="text" id="firstname" name="firstname"/>
          </label>
          <label>
              Number:
            <input type="text" id="number" name="firstname"/>
          </label>
          <label>
            Message:
            <textarea/>
          </label>
        

        </div>
      );
}
export default Form