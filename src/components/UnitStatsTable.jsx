import attackIcon from '@site/static/icons/stats/attack.webp';
import defenseIcon from '@site/static/icons/stats/defense.webp';
import armorIcon from '@site/static/icons/stats/armor.webp';
import healthIcon from '@site/static/icons/stats/health.webp';
import counterIcon from '@site/static/icons/stats/counter_attack.webp';
import reqIcon from '@site/static/icons/advanced.webp';

const statsIcons = [
  { key: 'Attack', icon: attackIcon, bg: 'bg-gradient-to-r from-sky-200 to-sky-100' },
  { key: 'Defense', icon: defenseIcon, bg: 'bg-gradient-to-r from-sky-200 to-sky-100' },
  { key: 'Armor', icon: armorIcon, bg: 'bg-gradient-to-r from-sky-200 to-sky-100' },
  { key: 'Health', icon: healthIcon, bg: 'bg-gradient-to-r from-sky-200 to-sky-100' },
  { key: 'Counter Attack', icon: counterIcon, bg: 'bg-gradient-to-r from-sky-200 to-sky-100' },
  { key: 'Requirement', icon: reqIcon, bg: 'bg-amber-900' },
];

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
            {statsIcons.map(({ key, icon, bg }) => (
              <th key={key}>
                <img
                  src={icon}
                  className={`w-6 h-6 rounded mx-auto ${bg}`}
                  style={{
                    minWidth: '24px',
                    minHeight: '24px',
                    maxWidth: '24px',
                    maxHeight: '24px',
                  }}
                  title={key}
                  alt={key}
                />
              </th>
            ))}
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
