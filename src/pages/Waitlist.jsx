import React from "react";
import "./waitlist.scss";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Header from "../components/Header";
export default function Waitlist() {
  return (
    <>
      <Header />
          <h1>Welcome to Stripps Waiting list</h1>
          <h4>The future of healthcare</h4>
      <section className="waitlist_wrapper">
        <aside className="description">
          <h3>Brief introduction to Stripps</h3>
          <p>
            At Stripps, we believe that everyone should have access to quality
            healthcare, no matter where they are. That's why we're creating a
            platform that allows patients to connect with qualified medical
            professionals from the comfort of their own homes. Join our
            wait-list now to be among the first group of people to enjoy 6 weeks
            of FREE, SECURED and TRANSPARENT medical consultations and services.
          </p>

          <div className="image">
            <img src="/images/waitlist.png" alt="" />
          </div>
        </aside>
        <form>
          <h4>WaitList Form</h4>
          <div className="waitlist_form">
            {/* <label htmlFor="name">Name</label> */}
            {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            {/* <label htmlFor="email">Email</label> */}
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            {/* <label htmlFor="gender">Gender</label> */}
            <TextField id="outlined-basic" label="Gender" variant="outlined" />
            {/* <label htmlFor="age">Age</label> */}
            <TextField id="outlined-basic" label="Age" variant="outlined" />
            {/* <label htmlFor="occupation">Occupation</label> */}
            <TextField
              id="outlined-basic"
              label="Occupation/Profrssion"
              variant="outlined"
            />
            {/* <label htmlFor="education">Education</label> */}
            <TextField
              id="outlined-basic"
              label="Education"
              variant="outlined"
            />
            {/* <label htmlFor="about us">How did you hear about us</label> */}
            <TextField
              id="outlined-basic"
              label="How did you find out about Stripps?"
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I'll like to receive updates from Stripps"
            />

            {/* <Checkbox  defaultChecked /> */}
          </div>
          <button>ADD ME TO WAITLIST</button>
        </form>
      </section>
    </>
  );
}
