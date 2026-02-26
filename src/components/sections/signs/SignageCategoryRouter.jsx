// SignageCategoryRouter.jsx 
// router/switcher for signage subcategories. 
import { useParams } from "react-router-dom";
import SignageCategories from "./SignageCategories";
import LedDigitalBoard from "./LedDigitalBoard";
import LedNeonSign from "./LedNeonSign";
import WindowGraphics from "./WindowGraphics";

const ROUTE_MAP = {
  "led-digital-board": LedDigitalBoard,
  "led-neon-sign": LedNeonSign,
  "window-graphics": WindowGraphics,
};

export default function SignageCategoryRouter() {
  const { slug } = useParams();
  const Component = ROUTE_MAP[slug] || SignageCategories;
  return <Component />;
}