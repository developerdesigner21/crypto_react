import React from "react";

import type { Metadata } from "next";
import WelcomePage from "./start-boarding/page";
import MainPage from "@/components/mainPage/MainPage";

export const metadata: Metadata = {
  title: "Welcome || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

export default function page() {
  return (
    <>
      {/* <PreviewPage /> */}
      {/* <WelcomePage /> */}
      <MainPage />
    </>
  );
}
