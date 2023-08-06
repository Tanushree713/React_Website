import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    Fullname: "",
    Email: "",
    Phone: "",
    Msg: ""
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Fullname:${data.Fullname}
           Email:${data.Email}
           Phone:${data.Phone}
           Contact:${data.Contact}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Fullname" // Corrected the name attribute
                  value={data.Fullname}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="Email" // Corrected the name attribute
                  value={data.Email}
                  onChange={InputEvent}
                  id="exampleFormControlInput2"
                  placeholder="Enter Your EmailId"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">
                  Phone-No:
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="Phone" // Corrected the name attribute
                  value={data.Phone}
                  onChange={InputEvent}
                  id="exampleFormControlInput3"
                  placeholder="Mobile no."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  name="Msg" // Corrected the name attribute
                  value={data.Msg}
                  onChange={InputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
