import { useContext } from "react";
import { ThemeContext } from "../../context";
import { useAnimation } from "../../hooks/useAnimation";

import "./styles.scss";

const BgBubbles = () => {
  const { linearGradient } = useContext(ThemeContext);
  const { animation } = useAnimation();

  return (
    <div className={`main ${animation}`} style={{ background: linearGradient }}>
      <BgBubbles.Bubbles />
    </div>
  );
};

BgBubbles.Bubbles = () => {
  return range(1, 30).map((n) => (
    <div key={n} className={`bubble bubble-${n}`} />
  ));
};

function range(start: number, end: number) {
  const ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

export default BgBubbles;
