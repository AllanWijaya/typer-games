import { Icon } from "@iconify-icon/react";

interface IconMainProps {
  icon: string;
  fontSize: number;
}
export default function IconMain({ icon, fontSize }: IconMainProps) {
  return <Icon icon={icon} style={{ fontSize }} />;
}
