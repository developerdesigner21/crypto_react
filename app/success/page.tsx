import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <div className="bg-camera">
      <div className="tf-container">
        <div className="pt-30 pb-30">
          <div className="success_box">
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
            <Link href={`/home`} className="tf-btn lg primary mt-40">
              Done
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
