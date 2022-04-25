import styled from "styled-components"
import { motion } from "framer-motion"

const ScrollButton = styled(motion.button)`
  border: none;
  width: 50px;
  height: 50px;
  background-color: #dde0e3;
  border-radius: 100%;
  position: fixed;
  right: 60px;
  top: 90vh;
  font-size: 25px;
  cursor: pointer;
  @media (max-width: 1380px) {
    right: 15px;
    width: 32px;
    height: 32px;
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`

export default ScrollButton
