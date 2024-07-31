import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// links das redes sociais

export function SocialLinks() {
  return (
    <div className="flex flex-row justify-between gap-5">
      <a
        aria-label="send-email"
        title="email"
        href="mailto:inovejunior@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail size={34} color="white" />
      </a>
      <a
        aria-label="go to facebook"
        title="facebook"
        href="https://www.facebook.com/i9junior"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare size={30} color="white" />
      </a>
      <a
        aria-label="go to instagram"
        title="instagram"
        href="https://www.instagram.com/i9junior/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} color="white" />
      </a>
      <a
        aria-label="go to linkedin"
        title="linkedin"
        href="https://www.linkedin.com/company/inovejr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} color="white" />
      </a>
    </div>
  );
}
