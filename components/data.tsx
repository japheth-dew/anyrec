import {
  FiBookOpen,
  FiCalendar,
  FiGift,
  FiGlobe,
  FiHome,
  FiPlus,
  FiSearch,
  FiSliders,
  FiTag,
  FiTool,
  FiTv,
  FiUsers,
} from "react-icons/fi";
import { TfiWheelchair } from "react-icons/tfi";
import { RiHeartPulseLine } from "react-icons/ri";
import { TiWatch } from "react-icons/ti";
import { HistoryCardProps } from "../types";

export const data: { icon: any; category: string }[] = [
  { icon: <TiWatch />, category: "Accessories" },
  { icon: <FiHome />, category: "Home & Office Supplies" },
  { icon: <FiTool />, category: "Bodycare & Lifestyle" },
  { icon: <FiCalendar />, category: "Events & Activiities" },
  { icon: <FiSliders />, category: "Miscellaneous" },
  { icon: <FiTag />, category: "Digital Products" },
  { icon: <FiUsers />, category: "Fashion related" },
  { icon: <FiGlobe />, category: "Online Services" },
  { icon: <FiBookOpen />, category: "Education related" },
  { icon: <FiGift />, category: "Gifts & Surprises" },
  { icon: <TfiWheelchair />, category: "Physical Services" },
  { icon: <FiTv />, category: "Electronics & Devices" },
  { icon: <RiHeartPulseLine />, category: "Health & Feeding" },
];

export const history: HistoryCardProps[] = [
  {
    day: "Today",
    history: [
      {
        product: "Apple Watch",
        categories: ["Accessories", "Fashion related"],
        makers: ["Apple", "Apple", "Apple"],
      },
      {
        product: "Apple Watch",
        categories: ["Accessories", "Fashion related"],
        makers: ["Apple", "Apple", "Apple"],
      },
      {
        product: "Body Cream",
        categories: ["Body care", "Life style"],
        makers: ["L'Oreal", "Nivea"],
      },
    ],
  },
  {
    day: "Yesterday",
    history: [
      {
        product: "Apple Watch",
        categories: ["Accessories", "Fashion related"],
        makers: ["Apple", "Apple", "Apple"],
      },
      {
        product: "Apple Watch",
        categories: ["Accessories", "Fashion related"],
        makers: ["Apple", "Apple", "Apple"],
      },
      {
        product: "Body Cream",
        categories: ["Body care", "Life style"],
        makers: ["L'Oreal", "Nivea"],
      },
    ],
  },
];
