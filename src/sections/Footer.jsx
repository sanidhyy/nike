import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

// footer
const Footer = () => {
  return (
    <div className="max-container">
      {/* footer top */}
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          {/* footer brand logo */}
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>

          {/* brand description */}
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          {/* social media icons */}
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                href={icon.link}
                target="_blank"
                rel="noreferrer noopener"
                title={icon.alt}
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        {/* footer links */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              {/* section title */}
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>

              {/* section links */}
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    title={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* footer bottom */}
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        {/* copyright */}
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>
            Copyright {new Date().getFullYear()}-
            {(new Date().getFullYear() % 100) + 1}. All rights reserved.
          </p>
        </div>

        {/* legal */}
        <a href="/" className="font-montserrat">
          Privacy Policy
        </a>
        <span className="hidden sm:block mx-2">|</span>
        <a href="/" className="font-montserrat">
          Terms &amp; Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
