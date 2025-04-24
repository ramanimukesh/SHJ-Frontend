import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
    // const location = useLocation();
    useEffect(() => {
      // Scroll to top when the pathname changes
      window.scrollTo(0, 0);
    }, []);
  
    return <>
        {props.children}
    </>
  };

export default ScrollToTop;
