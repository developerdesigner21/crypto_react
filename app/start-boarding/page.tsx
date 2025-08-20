import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const WelcomePage: React.FC = () => {
  return (
    <>
      <div className="header">
        <Link href={`/log-in`} className="right">
          Skip
        </Link>
      </div>
      <div className="wrap-boarding">
        <div className="tf-container">
          <div className="d-flex flex-column min-vh-100 justify-content-between">
            <div className="banner-boarding mt-30">
              <Image
                alt="img"
                src="/images/banner/boarding1.jpg"
                width={502}
                height={491}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={375}
                height={440}
                viewBox="0 0 390 440"
                fill="none"
              >
                <g filter="url(#filter0_f_1_12302)">
                  <path
                    d="M317.593 220.084C162.184 337.75 264.912 337.75 199.927 337.75C134.941 337.75 260.61 361.432 82.2598 220.084C-96.0904 78.7354 134.941 102.417 199.927 102.417C264.912 102.417 473.002 102.417 317.593 220.084Z"
                    fill="url(#paint0_linear_1_12302)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_12302"
                    x={-84}
                    y="0.925049"
                    width={558}
                    height="438.317"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={50}
                      result="effect1_foregroundBlur_1_12302"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_12302"
                    x1="329.25"
                    y1="100.925"
                    x2="182.611"
                    y2="397.934"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E250E5" />
                    <stop offset={1} stopColor="#4B50E6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="content mb-32">
              <h2 className="text-center">
                Welcome to Backedby Quantum Crypto Wallet app
              </h2>
              <p className="mt-8 text-center text-large">
                Discover the world of cryptocurrencies and manage your assets
                securely and conveniently.
              </p>
              <Link href={`/boarding`} className="tf-btn primary md mt-40">
                Next{" "}
              </Link>
              <p className="mt-20 text-center mb-35">
                By creating an account, you’re agree to our
                <Link
                  href='/about-us'
                  className="text-white"
                  // data-bs-toggle="modal"
                >
                  {" "}
                  About Us
                </Link>
                {/* {" "}
                and
                <a
                  href="#notiPrivacy"
                  className="text-white"
                  data-bs-toggle="modal"
                >
                  {" "}
                  Term of use
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
