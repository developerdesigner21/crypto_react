"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function ExchangeTrede() {
  const [activeIndex, setActiveIndex] = useState(3); // Default active item index (1 day)

  const times = [
    "10 minutes",
    "30 minutes",
    "1 hour",
    "1 day",
    "3 day",
    "7 day",
    "1 month",
    "3 month",
    "Custom",
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
        <h3 className="d-flex gap-12">
          <Link href={`/exchange-market`} className="text-secondary">
            Market
          </Link>
          <a href="#">Trade</a>
        </h3>
        <i className="icon-question text-white" />
      </div>
      <div className="pt-55 pb-120">
        <div className="tf-container">
          <div className="tf-tab pt-12 mt-4">
            <div className="tab-slide trade-tab">
              <ul className="nav nav-tabs wallet-tabs" role="tablist">
                <li className="item-slide-effect" />
                <li className="nav-item active" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#link"
                  >
                    Convert &amp; Link
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#order"
                  >
                    Limit order
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content pt-16 pb-16">
              <div
                className="tab-pane fade active show"
                id="link"
                role="tabpanel"
              >
                <div className="trade-box">
                  <div className="accent-box bg-menuDark">
                    <div className="text-small d-flex justify-content-between">
                      <p className="text-white">Pay</p>
                      <p className="d-flex align-items-center gap-20">
                        <span className="d-flex align-items-center gap-4">
                          <i className="icon-wallet fs-24" />
                          5,988
                        </span>
                        <span className="text-primary">Max</span>
                      </p>
                    </div>
                    <div className="coin-item style-1 gap-8 mt-20">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-3.jpg"
                        width={75}
                        height={75}
                      />
                      <div className="content">
                        <div className="title">
                          <h3 className="mb-4">
                            <a href="#" className="d-flex align-items-center">
                              ETH&nbsp;
                              <i className="icon-select-down" />
                            </a>
                          </h3>
                          <span>Ethereum</span>
                        </div>
                        <div className="box-price text-end">
                          <h3 className="mb-4">1</h3>
                          <span>$1.876,84</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="round-swap">
                    <i className="icon icon-clockwise" />
                  </div>
                  <div className="accent-box bg-menuDark mt-8">
                    <div className="text-small d-flex justify-content-between">
                      <p className="text-white">Receive</p>
                      <span className="d-flex align-items-center gap-4">
                        <i className="icon-wallet fs-24" />
                        0,031025
                      </span>
                    </div>
                    <div className="coin-item style-1 gap-8 mt-20">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-5.jpg"
                        width={60}
                        height={60}
                      />
                      <div className="content">
                        <div className="title">
                          <h3 className="mb-4">
                            <a href="#" className="d-flex align-items-center">
                              USDC&nbsp;
                              <i className="icon-select-down" />
                            </a>
                          </h3>
                          <span>Ethereum</span>
                        </div>
                        <div className="box-price text-end">
                          <h3 className="mb-4">1,038633</h3>
                          <p>
                            $1,03 <span className="text-primary">(+0,69)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="tf-btn lg mt-20 secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#connectWallet"
                >
                  Connect Wallet
                </a>

                <ul className="mt-20 accent-box line-border">
                  <li className="trade-list-item">
                    <p className="d-flex align-items-center text-small gap-4">
                      Reference{" "}
                      <i className="icon-question fs-16 text-secondary" />
                    </p>
                    <p className="d-flex gap-8 text-white">
                      1 ETH = 1.876,515984 USDC
                      <i className="icon-clockwise2 fs-16" />
                    </p>
                  </li>
                  <li className="trade-list-item mt-16">
                    <p className="d-flex align-items-center text-small gap-4">
                      Estimated network charges
                    </p>
                    <p className="d-flex gap-8 text-white">$3,71 (1 Minute)</p>
                  </li>
                  <li className="trade-list-item mt-16">
                    <p className="d-flex align-items-center text-small gap-4">
                      Acceptable slippage
                      <i className="icon-question fs-16 text-secondary" />
                    </p>
                    <a href="#" className="d-flex align-items-center gap-8">
                      1% <i className="icon-arr-right fs-8" />
                    </a>
                  </li>
                  <li className="trade-list-item mt-16">
                    <p className="d-flex align-items-center text-small gap-4">
                      X Routing{" "}
                      <i className="icon-question fs-16 text-secondary" />
                    </p>
                    <a href="#" className="d-flex gap-4 align-items-center">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-3.jpg"
                        width={75}
                        height={75}
                      />
                      <i className="icon-select-right" />
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-5.jpg"
                        width={60}
                        height={60}
                      />
                      <i className="icon-arr-right fs-8" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="order" role="tabpanel">
                <div className="trade-box">
                  <div className="accent-box bg-menuDark">
                    <p className="text-small text-white">Sell</p>
                    <div className="coin-item style-1 gap-8 mt-20">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-6.jpg"
                        width={64}
                        height={65}
                      />
                      <div className="content">
                        <div className="title">
                          <h3 className="mb-4">
                            <a href="#" className="d-flex align-items-center">
                              ETH&nbsp;
                              <i className="icon-select-down" />
                            </a>
                          </h3>
                          <span>Ethereum</span>
                        </div>
                        <div className="box-price text-end">
                          <h3 className="mb-4">5</h3>
                          <span>$9.357,1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="round-swap">
                    <i className="icon icon-clockwise" />
                  </div>
                  <div className="accent-box bg-menuDark mt-8">
                    <p className="text-small text-white">Pay</p>
                    <div className="coin-item style-1 gap-8 mt-20">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-5.jpg"
                        width={60}
                        height={60}
                      />
                      <div className="content">
                        <div className="title">
                          <h3 className="mb-4">
                            <a href="#" className="d-flex align-items-center">
                              USDC&nbsp;
                              <i className="icon-select-down" />
                            </a>
                          </h3>
                          <span>Ethereum</span>
                        </div>
                        <div className="box-price text-end">
                          <h3 className="mb-4">6,25</h3>
                          <p>$6,24 (-99,93%)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 accent-box bg-menuDark">
                  <li className="trade-list-item">
                    <p className="text-xsmall">
                      Sell WETH at exchange rate (-99,93%)
                    </p>
                    <p className="text-xsmall text-primary">Use market price</p>
                  </li>
                  <li className="mt-16">
                    <div className="pb-4 line-bt d-flex justify-content-between">
                      <p className="text-button text-white">1,25</p>
                      <p className="d-flex align-items-center gap-8 text-white text-small">
                        USDC{" "}
                        <i className="icon-clockwise2 fs-12 text-secondary" />
                      </p>
                    </div>
                    <p className="mt-4 text-xsmall">
                      Market: 1 WETH = 1.870,921609 USDC
                    </p>
                  </li>
                  <li className="mt-16">
                    <a
                      href="#"
                      className="trade-list-item"
                      data-bs-toggle="modal"
                      data-bs-target="#filterDay"
                    >
                      <span className="text-secondary">Due later</span>
                      <span className="text-white">
                        {times[activeIndex]}{" "}
                        <i className="icon-arr-right fs-8 text-secondary" />
                      </span>
                    </a>
                  </li>
                </ul>
                <a href="#" className="mt-20 tf-btn lg dark text-secondary">
                  Not enough ETH balance in wallet
                </a>
              </div>
            </div>
          </div>
          <div
            className="mt-16 footer-fixed-v2"
            data-bs-toggle="modal"
            data-bs-target="#detailChart"
          >
            <a href="#" className="trade-money-box">
              <p>ETH/USDC</p>
              <p className="d-flex align-items-center gap-8">
                <span>1.876,251425</span>
                <span className="text-red">-2,62</span>
                <i className="icon-arr-right fs-12" />
              </p>
            </a>
          </div>
        </div>
      </div>
      <>
        {/* connect wallet */}
        <div className="modal fade action-sheet" id="connectWallet">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span
                  className="icon-cancel"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                />
              </div>
              <div className="modal-body text-center">
                <span className="logo icon-wallet" />
                <h3 className="mt-4">Connect Wallet</h3>
                <p className="mt-12 text-white text-large">
                  Please connect by entering an existing wallet or create a new
                  one.
                </p>
                <div className="mt-32">
                  <a
                    href="#"
                    className="tf-btn sm secondary d-inline-flex"
                    data-bs-toggle="modal"
                    data-bs-target="#keyWallet"
                  >
                    Create wallet
                  </a>
                  <a
                    href="#"
                    className="mt-12 tf-btn sm dark d-inline-flex"
                    data-bs-toggle="modal"
                    data-bs-target="#keyWallet"
                  >
                    Enter a wallet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* key wallet */}
        <div className="modal fade action-sheet" id="keyWallet">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span>Select input method</span>
                <span
                  className="icon-cancel"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                />
              </div>
              <div className="modal-body">
                <ul>
                  <li
                    className="accent-box-v3 bg-surface tf-list-item-v3"
                    data-bs-toggle="modal"
                    data-bs-target="#inflation"
                  >
                    <div className="content">
                      <h5>
                        <a href="#">Keyless wallet</a>
                      </h5>
                      <p className="mt-8 text-small text">
                        Create an MPC wallet with your platform account.
                      </p>
                    </div>
                    <span className="icon icon-mpc" />
                  </li>
                  <li
                    className="mt-8 accent-box-v3 bg-surface tf-list-item-v3"
                    data-bs-toggle="modal"
                    data-bs-target="#inflation"
                  >
                    <div className="content">
                      <h5>
                        <a href="#">Seed phrase</a>
                      </h5>
                      <p className="mt-8 text-small text">
                        Create wallet using seed phrase
                      </p>
                    </div>
                    <span className="icon icon-phrase" />
                  </li>
                  <li
                    className="mt-8 accent-box-v3 bg-surface tf-list-item-v3"
                    data-bs-toggle="modal"
                    data-bs-target="#inflation"
                  >
                    <div className="content">
                      <h5>
                        <a href="#">Hardware wallet connection</a>
                      </h5>
                      <p className="mt-8 text-small text">
                        Connect hardware wallet via bluetooth
                      </p>
                    </div>
                    <span className="icon icon-bluetooth" />
                  </li>
                  <li
                    className="mt-8 accent-box-v3 bg-surface tf-list-item-v3"
                    data-bs-toggle="modal"
                    data-bs-target="#inflation"
                  >
                    <div className="content">
                      <h5>
                        <a href="#">Private key</a>
                      </h5>
                      <p className="mt-8 text-small text">
                        Paste or enter private key
                      </p>
                    </div>
                    <span className="icon-key" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* custom */}
        <div className="modal fade action-sheet" id="inflation">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span>inflation</span>
                <span
                  className="icon-cancel"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                />
              </div>
              <div className="modal-body">
                <ul>
                  <li className="accent-box-v3 bg-surface">
                    <h5>
                      <a href="#">Automatic (1%)</a>
                    </h5>
                    <p className="mt-8 text-small text">
                      automatically set slippage for successful trading. The
                      value set automatically changes in real time depending on
                      the price.
                    </p>
                  </li>
                  <li className="mt-8 accent-box-v3 bg-surface">
                    <h5>
                      <a href="#">Custom (Single String)</a>
                    </h5>
                    <p className="mt-8 text-small text">
                      slippage rate affects the chances of a successful trade
                      and the final price
                    </p>
                  </li>
                </ul>
                <Link
                  href={`/exchange-trade-approve`}
                  className="mt-32 tf-btn sm secondary"
                >
                  Confirm
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*chart detail  */}
        <div className="modal fade action-sheet" id="detailChart">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="box-detail-chart">
                <div className="top">
                  <h3 className="d-flex align-items-center gap-8">
                    ETH/USDC{" "}
                    <i className="icon-clockwise2 fs-16 text-secondary" />
                  </h3>
                  <h2 className="mt-4">1.845,9128</h2>
                  <p className="mt-4">
                    <a className="text-red">-0,92</a> Last 24 hours
                  </p>
                </div>
                <div className="content">
                  <div className="tab-content mt-8 mb-16">
                    <div className="tab-pane fade" id="1h" role="tabpanel">
                      <div className="area-chart-1" />
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="1d"
                      role="tabpanel"
                    >
                      <div className="area-chart-2" />
                    </div>
                    <div className="tab-pane fade" id="1w" role="tabpanel">
                      <div className="area-chart-3" />
                    </div>
                    <div className="tab-pane fade" id="1m" role="tabpanel">
                      <div className="area-chart-4" />
                    </div>
                    <div className="tab-pane fade" id="6m" role="tabpanel">
                      <div className="area-chart-5" />
                    </div>
                    <div className="tab-pane fade" id="1y" role="tabpanel">
                      <div className="area-chart-6" />
                    </div>
                  </div>
                  <ul className="tab-time" role="tablist">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#1h"
                        role="tab"
                        aria-controls="1h"
                        aria-selected="false"
                      >
                        1H
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a
                        href="#"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#1d"
                        role="tab"
                        aria-controls="1d"
                        aria-selected="true"
                      >
                        1D
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#1w"
                        role="tab"
                        aria-controls="1w"
                        aria-selected="false"
                      >
                        1W
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#1m"
                        role="tab"
                        aria-controls="1m"
                        aria-selected="false"
                      >
                        1M
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#6m"
                        role="tab"
                        aria-controls="6m"
                        aria-selected="false"
                      >
                        6M
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#1y"
                        role="tab"
                        aria-controls="1y"
                        aria-selected="false"
                      >
                        1Y
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bottom">
                  <h6 className="text-button">Token information</h6>
                  <ul className="mt-16 d-flex gap-16">
                    <li className="flex-1">
                      <a
                        href="#"
                        className="accent-box-v6 bg-surface d-flex justify-content-between align-items-center"
                      >
                        <div className="content">
                          <p className="text-small">
                            ETH
                            <span className="text-extra-small text-secondary">
                              / Ethereum
                            </span>
                          </p>
                          <span className="d-inline-block mt-8 coin-btn decrease">
                            +1,62%
                          </span>
                        </div>
                        <span className="icon-arr-right fs-12" />
                      </a>
                    </li>
                    <li className="flex-1">
                      <a
                        href="#"
                        className="accent-box-v6 bg-surface d-flex justify-content-between align-items-center"
                      >
                        <div className="content">
                          <p className="text-small">USDC</p>
                          <span className="d-inline-block mt-8 coin-btn increase">
                            +1,62%
                          </span>
                        </div>
                        <span className="icon-arr-right fs-12" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* modal filter day*/}
      <div className="modal fade action-sheet" id="filterDay">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Set a custom due date</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="pb-12 line-bt">
              {times.map((time, index) => (
                <li key={index} className={"mt-4 "}>
                  <div
                    className={`d-flex justify-content-between gap-8 text-large item-check ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    {time} <i className="icon icon-check-circle" />
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="item-check text-center text-button fw-6"
              data-bs-dismiss="modal"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
