import { useState, useEffect } from "react";
import propTypes from "prop-types";

export default function ProgressBar({ data, className }) {
  const [width, setWidth] = useState(0);
  const dataWidth = data * 10;
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(dataWidth > 100 ? 100 : dataWidth);
    }, 100);
    return () => clearTimeout(timer);
  }, [dataWidth]);

  return (
    <div className={`progress${className}`}>
      <div
        className="progressScore"
        style={{
          width: `${width}%`,
          backgroundColor: `#${className}`,
          transition: "width 1.5s ease-in-out",
        }}
      >
        <p>{Math.floor(dataWidth)}%</p>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  data: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};
