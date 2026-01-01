import type { FooterItemsGroupProps } from "../types";
import FooterItem from "./FooterItem";

function FooterItemsGroup({header,items}:FooterItemsGroupProps) {
  return (
    <div className="flex flex-col gap-5">
      <h6 className="font-bold">{header}</h6>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <FooterItem to={item.to} label={item.label} />
        ))}
      </ul>
    </div>
  );
}

export default FooterItemsGroup
