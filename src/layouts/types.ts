import type { ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
export type SocialIconProps = {
  icon: ReactNode;
  to: string;
  label?: string;
};
export type NavItemProps = {
  label?: string;
  to: string;
  icon?: ReactNode;
};
export type ActionNavItemProps = {
  value?: string |number;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
};

export type MobileDrawerProps = {
  open: boolean;
  onClose?: () => void;
};

export type AuthActionsProps= {
  className?: string;
}

export type FooterItemsGroupProps = {
  header: string;
  items: NavItemProps[];
};