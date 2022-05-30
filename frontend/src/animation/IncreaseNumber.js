import React, { useState } from 'react';
import { animated, config, useSpring } from "react-spring";

const IncreaseNumber = ({ amount }) => {

    const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 1 },
    number: amount,
    delay: 5000,
    config: config.molasses,
    onRest: () => set(flip),
  });

    return (
        <animated.div
        style={{
            fontSize: 40,
            fontWeight: 700,
            color: '#6b7280'
            // width: 80,
            // height: 80,
          }}
        >{number.to((n) => n.toFixed(0))}</animated.div>
    );
};

export default IncreaseNumber;