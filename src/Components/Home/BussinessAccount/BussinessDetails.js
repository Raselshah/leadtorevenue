import React, { useEffect, useState } from "react";
import cross from "../../../Assest/8665876_square_root_variable_icon@2x.png";
import contact from "../../../Assest/3669372_contact_ic_mail_icon.png";
import person from "../../../Assest/8673597_ic_fluent_person_add_filled_icon@2x.png";
import edit from "../../../Assest/103539_edit_icon.png";

const BussinessDetails = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const { account, contacts, variableValues } = user;
  console.log(account, contacts, variableValues);
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
        <div className="mt-4">
          <span className="flex justify-end">
            <img src={edit} alt="" />
          </span>
          <hr style={{ height: "3px" }} className="bg-gray-400 mt-2" />

          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Title</p>
            <p className="text-secondary w-full">Mr.</p>
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 mt-2" />
          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Name</p>
            <p className="text-secondary w-full">{contacts?.name}</p>
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 mt-2" />
          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Phone Number</p>
            <p className="text-secondary w-full">{contacts?.contactNo}</p>
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 mt-2" />
          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Email</p>
            <p className="text-secondary w-full">{contacts?.email}</p>
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 mt-2" />
          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Designation</p>
            <p className="text-secondary w-full">{contacts?.designation}</p>
          </div>
          <hr style={{ height: "3px" }} className="bg-gray-300 mt-2" />
          <div className="flex w-full justify-start mt-2">
            <p className="text-gray-400 w-full">Telegram Username</p>
            <p className="text-secondary w-full">{contacts?.tgUsername}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessDetails;
