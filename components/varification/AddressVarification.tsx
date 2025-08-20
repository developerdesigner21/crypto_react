"use client";
import Link from "next/link";
import GoBackButton from "../BackButton";
export default function AddressVarification() {
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Identity verification</h3>
      </div>
      <div className="pt-45 pb-90">
        <div className="tf-container">
          <ul className="mt-4 tabs-line">
            <li />
            <li className="active" />
          </ul>
          <h3 className="mt-12">Enter your address</h3>
          <p className="mt-8 text-small">
            Enter your primary address of residence. Please do not use post
            office boxes or business addresses.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-20">
            <fieldset>
              <label className="label-ip">
                <p className="mb-8 text-small">Country/region of residence</p>
                <div className="select-wrapper">
                  <select className="tf-select">
                    <option>USA</option>
                    <option>ENG</option>
                    <option>INDIA</option>
                  </select>
                </div>
              </label>
            </fieldset>
            <fieldset className="mt-20">
              <label className="label-ip">
                <p className="mb-8 text-small">Street address</p>
                <input
                  type="text"
                  placeholder="enter street address, building, room, v.v."
                />
              </label>
            </fieldset>
            <fieldset className="mt-20">
              <label className="label-ip">
                <p className="mb-8 text-small">City ​​or town</p>
                <input type="text" placeholder="enter City or town" />
              </label>
            </fieldset>
            <fieldset className="mt-20">
              <label className="label-ip">
                <p className="mb-8 text-small">
                  Postal code or ZIP code (optional)
                </p>
                <input
                  type="text"
                  placeholder="Enter postal code or ZIP code "
                />
              </label>
            </fieldset>
            <fieldset className="mt-20">
              <label className="label-ip">
                <p className="mb-8 text-small">State or province</p>
                <input type="text" placeholder="enter City or town" />
              </label>
            </fieldset>
            <div className="menubar-footer footer-fixed bg-surface">
              <div className="inner-bar">
                <a
                  href="#"
                  className="tf-btn lg primary"
                  data-bs-toggle="modal"
                  data-bs-target="#successful"
                >
                  Done
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal fade modalCenter" id="successful">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content success_box">
            <div className="icon-1 ani3">
              <span className="circle-box lg bg-circle check-icon bg-primary" />
            </div>
            <div className="icon-2 ani5">
              <span className="circle-box md bg-primary" />
            </div>
            <div className="icon-3 ani8">
              <span className="circle-box md bg-primary" />
            </div>
            <div className="icon-4 ani2">
              <span className="circle-box sm bg-primary" />
            </div>
            <h2 className="text-surface text-center">Successful!</h2>
            <p className="text-large text-center mt-8">
              Your personal information has been verified
            </p>
            <Link
              href={`/verification-advanced`}
              className="tf-btn lg primary mt-40"
            >
              Done
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
