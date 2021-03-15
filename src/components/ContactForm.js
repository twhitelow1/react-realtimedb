import React, { useState, useEffect } from "react";
// npm 


const ContactForm = (props) => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: ''
  }

  var [values, setValues] = useState(initialFieldValues)

  //When input changes extract the name and value properties and reset the vaule for that field.
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault();
  }


  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group col-md">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName}
          onChange={handleInputChange} />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i class="fas fa-envelope"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Email" name="email" value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <textarea className="form-control" placeholder="Address" name="address" value={values.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <input type="submit" value="Save" className="btn btn-primary btn-block" />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;