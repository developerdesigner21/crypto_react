import React from "react";

import type { Metadata } from "next";
import WelcomePage from "./start-boarding/page";
import MainPage from "@/components/mainPage/MainPage";
import Script from "next/script";

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
      <Script id="tawk-to" strategy="afterInteractive">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/68a47eda3af4381923c0391d/1j318v1mm';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QGB938VTGP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QGB938VTGP');
        `}
      </Script>
      {/* Microsoft Clarity */}
      <Script id="clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tdo07hpdda");
        `}
      </Script>
    </>
  );
}
