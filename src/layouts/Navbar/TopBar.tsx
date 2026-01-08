import { Mail, Phone } from 'lucide-react';
import SocialIcon from './SocialIcon';
import { FacebookIcon } from './SocialIcons/FacebookIcon';
import { InstagramIcon } from './SocialIcons/InstagramIcon';
import { TwitterIcon } from './SocialIcons/TwitterIcon';
import { YouTubeIcon } from './SocialIcons/YouTubeIcon';

function TopBar() {
  return (
    <section
      className="bg-secondary text-secondary-foreground px-10 py-4 w-full"
      aria-label="Top bar"
    >
      <div className=" w-full flex justify-between items-center">
        {/* Left */}
        <div className="flex gap-2.5">
          <a
            href="tel:+2255550118"
            className="flex font-bold gap-2 items-center "
          >
            <Phone size={16} />
            (225) 555-0118
          </a>
          <a
            href="mailto:michelle.rivera@example.com"
            className="flex gap-2 items-center font-bold "
          >
            <Mail size={16} />
            michelle.rivera@example.com
          </a>
        </div>

        {/* Center */}
        <h6 className="font-bold">Follow Us and get a chance to win 80% off</h6>

        {/* Right */}
        <div className="flex gap-2.5 items-center">
          <h6 className="font-bold">Follow us:</h6>
          <div className="flex gap-2.5">
            <SocialIcon
              icon={
                <InstagramIcon
                  fill="var(--color-secondary-foreground)"
                  className="w-4 h-4"
                />
              }
              to="https://www.instagram.com/samah_abulaymun/"
              label="instagram"
            />
            <SocialIcon
              icon={
                <FacebookIcon
                  fill="var(--color-secondary-foreground)"
                  className="w-4 h-4"
                />
              }
              to="#"
              label="Facebook"
            />
            <SocialIcon
              icon={
                <TwitterIcon
                  fill="var(--color-secondary-foreground)"
                  className="w-4 h-4"
                />
              }
              to="#"
              label="Twitter"
            />
            <SocialIcon
              icon={
                <YouTubeIcon
                  fill="var(--color-secondary-foreground)"
                  className="w-4 h-4"
                />
              }
              to="#"
              label="Youtube"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar
