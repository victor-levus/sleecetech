import Link from "next/link";
import moment from "moment";

import AppLogo from "../public/assets/icons/logo.png";

import {
  BiCopyright,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoSnapchat,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiLogoYoutube,
  BiPhone,
  BiSolidEnvelope,
} from "react-icons/bi";
import { BsFillGeoAltFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer---container" className="font-nanum">
      <div className="app---footer">
        <div className="footer---bottom first">
          <Link href="/">
            <img src={AppLogo} alt="app-logo" className="w-[100px] h-[]" />
          </Link>
          <p className="mt-4">
            Sleece Technologies Limited is a dynamic IT firm dedicated to
            delivering innovative solutions across a wide range of sectors.
            Founded with a vision to transform how businesses operate through
            technology, we have grown into a trusted partner for organizations
            seeking to enhance their operational efficiency and drive growth.
          </p>
        </div>
        <div className="footer---bottom second">
          <h6>QUICK LINKS</h6>
          <div className="quick---link">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/teams">Our Teams</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/gallery">Gallery</Link>
          </div>
        </div>
        <div className="footer---bottom third">
          <h6>CONTACT INFO</h6>
          <div className="contact---link">
            <Link href="/" className="flex items-center">
              <BiSolidEnvelope />
              <span>info@sleecetechnologies.com.ng</span>
            </Link>
            <Link href="/" className="flex items-center">
              <BiPhone />
              <span>+234 803 0724 271</span>
            </Link>
            <Link href="/" className="flex items-center">
              <BsFillGeoAltFill />
              <span>Plot 2157 B07 Cadastral Zone Kamtape Abuja FCT</span>
            </Link>
            <div className="social---media--logo flex">
              <Link href="/">
                <BiLogoFacebook />
              </Link>
              <Link href="/">
                <BiLogoTwitter />
              </Link>
              <Link href="/">
                <BiLogoYoutube />
              </Link>
              <Link href="/">
                <BiLogoInstagram />
              </Link>
              <Link href="/">
                <BiLogoWhatsapp />
              </Link>
              <Link href="/">
                <BiLogoSnapchat />
              </Link>
              <Link href="/">
                <BiLogoPinterest />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer---base">
        <p>
          Copyright
          <span className="inline-block ">
            <BiCopyright />
          </span>{" "}
          {moment().format("YYYY")} | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
