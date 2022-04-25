import React from "react"
import ScrollButton from "./scroll-to-top-style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { animateScroll } from "react-scroll"

export const ScrollToTop = () => {
  return (
    <ScrollButton
      onClick={() => animateScroll.scrollToTop()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </ScrollButton>
  )
}
