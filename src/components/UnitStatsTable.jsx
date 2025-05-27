export default function UnitStatsTable({ baseStats, requirements }) {
  const levels = Array.from({ length: 10 }, (_, i) => i + 1);

  const format = (value) => {
    return value === 0 ? '-' : value.toFixed(2);
  };

  return (
    <div>
      <table className="text-center">
        <thead>
          <tr>
            <th>Level</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Armor</th>
            <th>Health</th>
            <th>Counter</th>
            <th>Requirement</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((level, index) => (
            <tr key={level}>
              <td>{level}</td>
              <td>{format(baseStats.attack + (baseStats.attackPerLevel ?? 0) * index)}</td>
              <td>{format(baseStats.defense + (baseStats.defensePerLevel ?? 0) * index)}</td>
              <td>{format(baseStats.armor + (baseStats.armorPerLevel ?? 0) * index)}</td>
              <td>{format(baseStats.health + (baseStats.healthPerLevel ?? 0) * index)}</td>
              <td>{format(baseStats.counter + (baseStats.counterPerLevel ?? 0) * index)}</td>
              <td>{requirements?.[level] ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
