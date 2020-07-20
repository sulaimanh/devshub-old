import {
  faAddressCard,
  faHome,
  faMailBulk,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const menus = [
  {
    choice: "Home",
    icon: faHome,
    path: "home"
  },
  {
    choice: "Profile",
    icon: faAddressCard,
    path: "profile"
  },
  {
    choice: "Messages",
    icon: faMailBulk,
    path: "messages"
  },
  {
    choice: "Sign Out",
    icon: faSignOutAlt,
    path: "signOut"
  }
];

export default menus;
