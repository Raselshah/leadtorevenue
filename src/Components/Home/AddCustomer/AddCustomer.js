import React from "react";
import BussinessAccount from "../BussinessAccount/BussinessAccount";

const AddCustomer = () => {
  return (
    <div className="px-12 py-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-neutral text-2xl font-bold">Add Customer</h2>
        <button className="btn btn-accent">ADD CUSTOMER</button>
      </div>
      <BussinessAccount />
    </div>
  );
};

export default AddCustomer;
