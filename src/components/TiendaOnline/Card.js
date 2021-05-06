import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { motion, useCycle } from "framer-motion";

//components
import ProductCard from './ProductCard';
import ClickOutside from '../componentesGLB/ClickOutside';

const HeaderCtn = styled(motion.div)`
padding: 25px 0;
`;
const Ctn = styled.div`
display: inline-block;

&+& {
  margin-left: 15px;
}

a {
  display: block;
  position: relative;
  width: 90px;
  text-align: center;
  color: black;
}

a:hover {
  color: grey;
}

a>i {
  display: block;
  font-size: 18px;
}

a>span {
  font-size: 12px;
}

a>div {
  position: absolute;
  right: 15px;
  top: -10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  font-size: 10px;
  color: #FFF;
  background-color: #D10024;
}
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(25px at 52px 24px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function Card() {
  const itemsCart = useSelector(state => state.itemsCart);

  const [isOpen, toggleOpen] = useCycle(false, true);

  const ref = useRef(null);
  ClickOutside(ref, () => toggleOpen(), isOpen);

  return (
    <div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={ref}
      >
        <HeaderCtn variants={sidebar}>
          <Ctn>
            <a onClick={() => toggleOpen()}>
              <i className="fa fa-shopping-cart"></i>
              <div>{itemsCart.length}</div>
            </a>
          </Ctn>
          <ProductCard 
            toggleOpen={()=>toggleOpen()}
          />
        </HeaderCtn>
      </motion.div>
    </div>
  );
}


export default Card;