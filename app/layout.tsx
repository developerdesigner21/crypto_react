"use client"; // Make sure this is a client-side component

import { useEffect, ReactNode } from "react";
import "../public/scss/main.scss";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";


// Typing the props for the component
interface RootLayoutProps {
  children: ReactNode; // `children` can be any valid React node (JSX, string, number, etc.)
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if needed
      });
    }
  }, []);
  useEffect(() => {
    // Close any open modal
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Close any open offcanvas
    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
    const backdrops = document.querySelectorAll(".modal-backdrop");
    const body = document.body;
    body.removeAttribute("style");

    backdrops.forEach((elm) => {
      (elm as HTMLElement).style.display = "none";
    });
  }, [pathname]); // Runs every time the route changes
  return (
    <html lang="en">
      <body>
        {children}
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
