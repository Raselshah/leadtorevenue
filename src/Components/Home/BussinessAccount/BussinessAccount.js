import React from "react";
import contact from "../../../Assest/3669372_contact_ic_mail_icon@2x.png";
import BussinessDetails from "./BussinessDetails";

const BussinessAccount = () => {
  return (
    <>
      <div className="bg-primary mt-4 px-6 py-2 rounded">
        <h2 className="flex gap-x-2 text-secondary">
          <span>
            <img className="w-6" src={contact} alt="" />
          </span>
          BUSINESS ACCOUNT DETAILS
        </h2>

        <div className="flex flex-row justify-between gap-6 mt-4 mb-6">
          <div className="w-full">
            <input
              type="text"
              placeholder="Account Name"
              class="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="Contact Number"
              class="input input-bordered w-full mt-4"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Account Type"
              class="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Email ID"
              class="input input-bordered w-full mt-4"
            />
          </div>
        </div>
      </div>
      <BussinessDetails />
    </>
  );
};

export default BussinessAccount;
