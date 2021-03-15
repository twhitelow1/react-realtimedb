import React, { useState, useEffect } from "react";
// npm 


const ContactForm = () => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: ''
  }

  var [values, setValues] = useState(initialFieldValues)
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }


  return (
    <form autoComplete="off">
      <div className="form-group input-group col-md-6">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName} />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile} />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i class="fas fa-envelope"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Email" name="email" value={values.email} />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;