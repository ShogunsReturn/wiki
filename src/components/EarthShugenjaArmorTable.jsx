export default function EarthShugenjaArmorTable() {
  const A = 2.98;
  const C = -0.06;
  const counts = [1, 10, 50, 100, 200, 1000];

  const computeArmor = (count) => {
    const result = A * Math.log(count + 1) + C;
    return Math.max(0, result).toFixed(2);
  };

  return (
    <ul>
      {counts.map((count) => (
        <li key={count}>
          <strong>{count} Shugenja</strong> → +{computeArmor(count)}% armor
        </li>
      ))}
    </ul>
  );
};