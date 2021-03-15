import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

const Contacts = () => {

  var [currentId, setCurrentId] = useState('');
  var [contactObjects, setContactObjects] = useState({});

  //Once components load complete
  useEffect(() => {
    firebaseDb.child('contacts').on('value', snapshot => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val()
        });
      }
    })
  }, [])


  const addOrEdit = obj => {
    firebaseDb.child('contacts').push(
      obj,
      err => {
        if (err) {
          console.log(err);
        }
      }
    )
  }

  const onDelete = id => {
    // record with given id is to be deleted.
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Manager</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...({ currentId, contactObjects, addOrEdit })} ></ContactForm>
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(contactObjects).map((key) => (
                  <tr key={key}>
                    <td>{contactObjects[key].fullName}</td>
                    <td>{contactObjects[key].mobile}</td>
                    <td>{contactObjects[key].email}</td>
                    <td className="bg-light">
                      <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Contacts;