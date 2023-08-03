const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(9)
        .fill("")
        .map((e, i) => (
          <div key={i} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
