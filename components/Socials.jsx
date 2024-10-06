import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaLink,
} from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/Benzon007" },
  { icons: <FaLinkedin />, path: "https://www.linkedin.com/in/bensonbinu/" },
  { icons: <FaInstagram />, path: "" },
  { icons: <FaTwitter />, path: "" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
