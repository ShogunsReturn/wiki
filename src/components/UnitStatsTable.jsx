import units from '@site/src/data/units.json';
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

function getUnitData(unitName) {
  const allUnits = [
    ...units.basic_units,
    ...units.magic_units,
    ...units.dark_units,
    ...units.summoned_units,
    ...units.other_units,
    ...units.special_units,
  ];

  return allUnits.find((u) => u.name === unitName);
}

function getBaseStats(unit) {
  return {
    attack: unit.attack,
    attackPerLevel: unit.attack_increment ?? 0,
    defense: unit.defense,
    defensePerLevel: unit.defense_increment ?? 0,
    armor: unit.armor,
    armorPerLevel: unit.armor_increment ?? 0,
    health: unit.health,
    healthPerLevel: unit.health_increment ?? 0,
    counter: unit.counter_attack,
    counterPerLevel: unit.counter_attack_increment ?? 0,
  };
}

function getRequirements(unit) {
  const buildings = unit.requirements?.building ?? [];
  const levelsList = unit.requirements?.levels ?? [];

  const maxLevels = Math.max(...levelsList.map(str => str.split(',').length));
  const reqs = {};

  for (let i = 0; i < maxLevels; i++) {
    const reqParts = [];

    for (let j = 0; j < buildings.length; j++) {
      const levelString = levelsList[j] ?? '';
      const levelArray = levelString.split(',');

      if (levelArray[i]) {
        reqParts.push(`${buildings[j]}(${levelArray[i]})`);
      }
    }

    reqs[i + 1] = reqParts.join(', ');
  }

  return reqs;
}

export default function UnitStatsTable({ unitName }) {
  const unit = getUnitData(unitName);
  if (!unit) return <p>Unit not found.</p>;

  const baseStats = getBaseStats(unit);
  const requirements = getRequirements(unit);
  const levels = Array.from({ length: 10 }, (_, i) => i + 1);

  const format = (value) => (value === 0 ? '-' : value.toFixed(2));

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
                  style={{ minWidth: '24px', minHeight: '24px', maxWidth: '24px', maxHeight: '24px' }}
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
              <td>{format(baseStats.attack + baseStats.attackPerLevel * index)}</td>
              <td>{format(baseStats.defense + baseStats.defensePerLevel * index)}</td>
              <td>{format(baseStats.armor + baseStats.armorPerLevel * index)}</td>
              <td>{format(baseStats.health + baseStats.healthPerLevel * index)}</td>
              <td>{format(baseStats.counter + baseStats.counterPerLevel * index)}</td>
              <td>{requirements?.[level] ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
