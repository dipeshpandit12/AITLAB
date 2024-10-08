/** @format */

import React, { useState, useEffect } from "react";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Move useColorModeValue outside of conditional rendering
  const bgColor = useColorModeValue("blue.600", "blue.300");
  const iconColor = useColorModeValue("white", "gray.800");
  const hoverBgColor = useColorModeValue("blue.500", "blue.400");

  return (
    isVisible && (
      <IconButton
        aria-label="Scroll to top"
        icon={<FaArrowUp />}
        onClick={scrollToTop}
        position="fixed"
        bottom="50px"
        right="50px"
        zIndex="1000"
        size="md"
        bg={bgColor} // Use variables instead of calling hooks here
        color={iconColor} // Use variables instead of calling hooks here
        _hover={{ bg: hoverBgColor }} // Use variables instead of calling hooks here
      />
    )
  );
};

export default ScrollToTop;
