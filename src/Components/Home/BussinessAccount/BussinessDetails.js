import React from "react";
import cross from "../../../Assest/8665876_square_root_variable_icon@2x.png";
import contact from "../../../Assest/3669372_contact_ic_mail_icon.png";
import person from "../../../Assest/8673597_ic_fluent_person_add_filled_icon@2x.png";
import edit from "../../../Assest/103539_edit_icon.png";

const BussinessDetails = ({ getAccount }) => {
  const handleUserData = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const designation = e.target.designation.value;
    const tgName = e.target.tgName.value;
    const contacts = {
      title: title,
      name: name,
      contactNo: phone,
      email: email,
      designation: designation,
      tgUsername: tgName,
    };
    getAccount(contacts);
  };
  return (
    <div className="mt-6 flex justify-between gap-6">
      <div className="bg-primary rounded px-6 py-2 w-full">
        <div className="flex justify-between">
          <h2 className="flex gap-x-2 text-secondary items-center">
            <span>
              <img className="w-6" src={cross} alt="" />
            </span>
            VARIABLES
          </h2>
          <button className="btn btn-accent">ADD VARIABLE</button>
        </div>

        <div className="flex justify-between gap-6 mt-4">
          <p className="bg-white text-secondary py-2 px-4 rounded w-full text-center">
            Variable 1 Key
          </p>
          <p className="bg-white text-secondary py-2 px-4 rounded w-4/6 text-center">
            Value 1
          </p>
        </div>
      </div>
      <div className="bg-primary rounded w-full px-6 py-2">
        <div className="flex justify-between">
          <h2 className="flex gap-x-2 text-secondary items-center">
            <span>
              <img className="w-6" src={contact} alt="" />
            </span>
            CONTACT PERSON
          </h2>
          <button className="btn btn-accent flex justify-between items-center gap-x-2">
            <span>
              <img className="w-6" src={person} alt="" />
            </span>
            ADD NEW
          </button>
        </div>
        <form onSubmit={handleUserData} className="mt-4">
          <span className="flex justify-end">
            <img src={edit} alt="" />
          </span>
          <hr style={{ height: "3px" }} className="bg-gray-400 mt-2" />

          <div className="flex w-full justify-start items-center mt-2">
            <p className="text-gray-400 w-full">Title</p>
            <select name="title" class="select select-ghost w-2/4 max-w-xs">
              <option>Mr.</option>
              <option>Mrs.</option>
            </select>
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 " />
          <div className="flex w-full justify-start items-center mt-2">
            <p className="text-gray-400 w-full mt-2">Name</p>
            <input
              name="name"
              type="text"
              placeholder="type your name"
              class="input input-ghost w-full input-sm"
            />
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 mt-2" />
          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Phone Number</p>
            <input
              name="phone"
              type="text"
              placeholder="type phone number"
              class="input input-ghost w-full input-sm"
            />
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 mt-2" />
          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Email</p>
            <input
              name="email"
              type="text"
              placeholder="type Email"
              class="input input-ghost w-full input-sm"
            />
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 mt-2" />
          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Designation</p>
            <input
              name="designation"
              type="text"
              placeholder="type your designation"
              class="input input-ghost w-full input-sm"
            />
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 mt-2" />
          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Telegram Username</p>
            <input
              name="tgName"
              type="text"
              placeholder="type your tgName"
              class="input input-ghost w-full input-sm"
            />
          </div>
          <input
            className="mx-auto flex mt-2 cursor-pointer"
            type="submit"
            value="SUBMIT USER"
          />
        </form>
      </div>
    </div>
  );
};

export default BussinessDetails;
