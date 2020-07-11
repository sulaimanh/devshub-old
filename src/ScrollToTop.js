import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
