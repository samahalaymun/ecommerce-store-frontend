import Logo from "../Navbar/Logo";
import SocialIcon from "../Navbar/SocialIcon";
import { FacebookIcon } from "../Navbar/SocialIcons/FacebookIcon";
import { InstagramIcon } from "../Navbar/SocialIcons/InstagramIcon";
import { TwitterIcon } from "../Navbar/SocialIcons/TwitterIcon";
import FooterItemsGroup from "./FooterItemsGroup";
import { CompanyInfo, Features, Resources } from "@/data/constants";
import { InputGroup, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Field, FieldDescription } from "@/components/ui/field";

function Footer() {
  return (
    <footer className="bg-background ">
      <div className="px-4 bg-secondary text-secondary-foreground  lg:px-10 flex flex-col gap-2.5 lg:flex-row justify-between py-10 lg:border-b border-border">
        <Logo />
        <div className="flex gap-5">
          <SocialIcon
            icon={
              <InstagramIcon fill="var(--color-primary)" className="w-6 h-6" />
            }
            to="https://www.instagram.com/samah_abulaymun/"
            label="instagram"
          />
          <SocialIcon
            icon={
              <FacebookIcon fill="var(--color-primary)" className="w-6 h-6" />
            }
            to="#"
            label="Facebook"
          />
          <SocialIcon
            icon={
              <TwitterIcon fill="var(--color-primary)" className="w-6 h-6" />
            }
            to="#"
            label="Twitter"
          />
        </div>
      </div>
      <div className="py-12.5 px-4 lg:px-10 flex justify-between lg:flex-row flex-col gap-7.5">
        <FooterItemsGroup header="Company Info" items={CompanyInfo} />
        <FooterItemsGroup header="Legal" items={CompanyInfo} />
        <FooterItemsGroup header="Features" items={Features} />
        <FooterItemsGroup header="Resources" items={Resources} />
        <div className="flex flex-col gap-5">
          <h6 className="font-bold">Get In Touch</h6>
          <Field>
            <InputGroup>
              <InputGroupInput placeholder="Your Email" />
              <InputGroupButton variant="default" size="sm">
                Subscribe
              </InputGroupButton>
            </InputGroup>
            <FieldDescription className="text-muted-foreground">
              Lore imp sum dolor Amit
            </FieldDescription>
          </Field>
        </div>
      </div>
      <div className="py-6.25 bg-secondary text-secondary-foreground px-4 lg:px-10">
        <h6 className="font-bold  lg:text-start text-center">
          Made With Love By Finland All Right Reserved
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
