import propTypes from "prop-types";

export default function ProgressBar({ data, className }) {
  let width = data * 10;
  if (width > 100) {
    width = 100;
  }

  return (
    <div className={`progress${className}`}>
      <div
        className="progressScore"
        style={{ width: `${width}%`, backgroundColor: `#${className}` }}
      >
        <p>{data * 10}%</p>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  data: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};
