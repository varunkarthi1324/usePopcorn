const constainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainer = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};
export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={constainerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
