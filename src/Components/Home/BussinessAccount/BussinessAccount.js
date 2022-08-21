import React, { useState } from "react";
import contact from "../../../Assest/3669372_contact_ic_mail_icon@2x.png";
import BussinessDetails from "./BussinessDetails";

const BussinessAccount = () => {
  const [user, setUser] = useState({});
  const [accountUser, seAccountUser] = useState({});
  const getAccount = (data) => {
    setUser(data);
  };
  const handleAddAccount = (e) => {
    e.preventDefault();
    console.log(e);
    const accountName = e.target.accountName.value;
    const contactNumber = e.target.contactNumber.value;
    const accountType = e.target.accountType.value;
    const EmailId = e.target.EmailId.value;
    const account = {
      name: accountName,
      contactNo: contactNumber,
      type: accountType,
      emailId: EmailId,
    };
    seAccountUser(account);
  };

  const handlePost = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        account: {
          name: accountUser.name,
          type: accountUser.type,
          contactNo: accountUser.contactNo,
          emailId: accountUser.emailId,
        },
        contacts: [
          {
            title: user.title,
            name: user.name,
            email: user.email,
            contactNo: user.contactNo,
            tgUsername: user.tgUsername,
            designation: user.designation,
          },
        ],
        internName: "Rasel",
      }),
    };
    fetch(
      "https://internship.leadtorev.com/clients/customers/add",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => console.log("success", data));
  };

  return (
    <>
      <div className="bg-primary mt-4 px-6 py-2 rounded">
        <h2 className="flex gap-x-2 text-secondary">
          <span>
            <img className="w-6" src={contact} alt="" />
          </span>
          BUSINESS ACCOUNT DETAILS
        </h2>

        <form onSubmit={handleAddAccount} className="">
          <div className="flex flex-row justify-between gap-6 mt-4 mb-6">
            <div className="w-full">
              <input
                name="accountName"
                type="text"
                placeholder="Account Name"
                class="input input-bordered w-full"
              />
              <input
                name="contactNumber"
                type="number"
                placeholder="Contact Number"
                class="input input-bordered w-full mt-4"
              />
            </div>
            <div className="w-full">
              <input
                name="accountType"
                type="text"
                placeholder="Account Type"
                class="input input-bordered w-full"
              />
              <input
                name="EmailId"
                type="text"
                placeholder="Email ID"
                class="input input-bordered w-full mt-4"
              />
            </div>
          </div>
          <input
            className="cursor-pointer flex mx-auto"
            type="submit"
            value="SUBMIT ACCOUNT"
          />
        </form>
      </div>
      <BussinessDetails getAccount={getAccount} />
      <button onClick={handlePost} className="flex mx-auto cursor-pointer mt-2">
        Submit
      </button>
    </>
  );
};

export default BussinessAccount;
