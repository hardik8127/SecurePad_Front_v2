import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import logo from "../assets/images/logo.png";
const FooterInScan = () => {
  return (
    <footer className="schield_foot">
      <div className="container px-6 py-8 mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:px-[50px] lg:grid-cols-4 xl:grid-cols-5">
          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Company
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="/about-us"
                className="text-[#fff] font-normal leading-[170%]  font-sans font-normal leading-[170%] text-lg transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Team
              </a>
              <a
                href="/about-us"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                About Us
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Request a quote
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Referral
              </a>
              <a
                 href="https://securedapp.gitbook.io/securedapp-launchpad/careers"
                 target="_blank"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Career
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Resource
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="/smart-contract-scanner-solidity-shield"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Solidity Shield
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Audit Process
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Our Services
              </a>
              <a
                href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy"
                target="_blank"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Privacy Policy
              </a>
              <a
                href="https://securedapp.gitbook.io/securedapp-launchpad/workplace-policy"
                target="_blank"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Workplace Policy
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Our Mission & Core values
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Products{" "}
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Search
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Rewards
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Wallet
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Firewall + VPN
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Talk
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                News
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Playlist
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                All features
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Participate
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                 href="https://linktr.ee/securedapp"
                 target="_blank"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Community
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Contributors
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Events
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Newsletters
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Explore
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                 href="securepad.netlify.app"
                 target="_blank"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Tokens
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Apps & Services
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Wallets
              </a>
              <a
                href="/"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Interchain security
              </a>
              <a
                href="/blog"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Blog
              </a>
              <a
                href="https://github.com/securedapp-github"
                target="_blank"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between  sm:flex-row lg:px-[10px] ">
          <div className="pl-[50px] sm:py-[20px]">
            <a href="/">
              {" "}
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex items-center space-x-4 py-[20px] lg:py-[0px] text-white">
            <a
              href="https://securedapp.gitbook.io/securedapp-launchpad/t-and-c"
              target="_blank"
              className="text-[#fff] font-normal leading-[170%]  px-[20px] hover:text-blue-600 transition-colors duration-200"
            >
              Terms of Condition
            </a>{" "}
            |
            <a
                            href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy"
                            target="_blank"
              className="text-[#fff] font-normal leading-[170%]  px-[20px] hover:text-blue-600 transition-colors duration-200"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="/"
              className="text-[#fff] font-normal leading-[170%]  hover:text-blue-600 transition-colors duration-200"
            >
              Lite Paper
            </a>
          </div>
          <div className="flex items-center justify-center pr-[50px] space-x-4 sm:justify-end">
            <a
              href="https://discord.com/invite/jQcd5WwhNy"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              <FaFacebook className="w-[30px] h-[30px]" />
            </a>
            <a
              href="https://twitter.com/secure_dapp"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              <FaTwitter className="w-[30px] h-[30px]" />
            </a>
            <a
              href="https://www.instagram.com/securedapp_official/"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              <FaInstagram className="w-[30px] h-[30px]" />
            </a>
            <a
              href="https://telegram.me/securedappcommunity"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              <FaTelegram className="w-[30px] h-[30px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInScan;