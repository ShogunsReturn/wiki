import politicsData from '@site/src/data/politics.json';
import riceIcon from '@site/static/icons/rice.webp';
import meatIcon from '@site/static/icons/meat.webp';
import woodIcon from '@site/static/icons/wood.webp';
import ironIcon from '@site/static/icons/iron.webp';
import goldIcon from '@site/static/icons/gold.webp';
import honorIcon from '@site/static/icons/honor.webp';
import populationIcon from '@site/static/icons/population.webp';
import favorsIcon from '@site/static/icons/imperial_favors.webp';
import { formatTime } from '@site/src/utils/utils.js';

const defaultCosts = [0, 0, 0, 0, 0, 0];

const costIcons = [
  { key: 'Gold', icon: goldIcon, bg: 'bg-yellow-500' },
  { key: 'Rice', icon: riceIcon, bg: 'bg-red-600' },
  { key: 'Wood', icon: woodIcon, bg: 'bg-green-600' },
  { key: 'Iron', icon: ironIcon, bg: 'bg-gray-500' },
  { key: 'Honor', icon: honorIcon, bg: 'bg-gray-800' },
  { key: 'Imperial Favors', icon: favorsIcon, bg: 'bg-orange-500' },
];

const maintenanceIcons = [
  { key: 'Gold', icon: goldIcon, bg: 'bg-yellow-500' },
  { key: 'Meat', icon: meatIcon, bg: 'bg-red-600' },
  { key: 'Wood', icon: woodIcon, bg: 'bg-green-600' },
  { key: 'Iron', icon: ironIcon, bg: 'bg-gray-500' },
  { key: 'Honor', icon: honorIcon, bg: 'bg-gray-800' },
  { key: 'Population', icon: populationIcon, bg: 'bg-orange-500' },
];

const getActiveIndexes = (politics, type = 'cost') => {
  const used = new Array(6).fill(false);
  for (const policy of politics) {
    const values = policy[type] || defaultCosts;
    values.forEach((val, i) => {
      if (val) used[i] = true;
    });
  }
  return used.map((u, i) => (u ? i : null)).filter(i => i !== null);
};

const PolicyRow = ({ policy, costIndexes, maintenanceIndexes }) => {
  const {
    name,
    cost = defaultCosts,
    maintenance = defaultCosts,
    building_requirement,
    honor_requirement,
    activation,
    cooldown,
    duration,
  } = policy;

  const req = building_requirement || ['-', '-'];

  return (
    <tr>
      <td className="font-bold">{name}</td>
      {costIndexes.map((i) => (
        <td key={`cost-${i}`}>{cost[i] || '-'}</td>
      ))}
      {maintenanceIndexes.length > 0 &&
        maintenanceIndexes.map((i) => (
          <td key={`maintenance-${i}`}>{maintenance[i] || '-'}</td>
        ))}
      <td>{`${req[0]} (${req[1]})`}</td>
      <td>{honor_requirement ?? '-'}</td>
      <td>{formatTime(activation)}</td>
      <td>{formatTime(cooldown)}</td>
      <td>{formatTime(duration)}</td>
    </tr>
  );
};

const PoliticsTable = ({ category }) => {
  const politics = politicsData[category];

  if (!politics) {
    return <div className="text-red-600">Invalid category: {category}</div>;
  }

  const costIndexes = getActiveIndexes(politics, 'cost');
  const maintenanceIndexes = getActiveIndexes(politics, 'maintenance');
  const showMaintenance = maintenanceIndexes.length > 0;

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th rowSpan="2">Name</th>
              <th colSpan={costIndexes.length}>Cost</th>
              {showMaintenance && <th colSpan={maintenanceIndexes.length}>Maintenance</th>}
              <th rowSpan="2">Requirement</th>
              <th rowSpan="2">Honor</th>
              <th rowSpan="2">Activation</th>
              <th rowSpan="2">Cooldown</th>
              <th rowSpan="2">Duration</th>
            </tr>
            <tr className="bg-gray-50 text-xs text-gray-700">
              {costIndexes.map((i) => (
                <th key={`cost-head-${i}`}>
                  <img
                    src={costIcons[i].icon}
                    className={`w-6 h-6 ${costIcons[i].bg} rounded mx-auto`}
                    style={{ minWidth: '24px', minHeight: '24px', maxWidth: '24px', maxHeight: '24px' }}
                    title={costIcons[i].key}
                    alt={costIcons[i].key}
                  />
                </th>
              ))}
              {showMaintenance &&
                maintenanceIndexes.map((i) => (
                  <th key={`maint-head-${i}`}>
                    <img
                      src={maintenanceIcons[i].icon}
                      className={`w-6 h-6 ${maintenanceIcons[i].bg} rounded mx-auto`}
                      style={{ minWidth: '24px', minHeight: '24px', maxWidth: '24px', maxHeight: '24px' }}
                      title={maintenanceIcons[i].key}
                      alt={maintenanceIcons[i].key}
                    />
                  </th>
                ))}
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {politics.map((policy, index) => (
              <PolicyRow
                key={index}
                policy={policy}
                costIndexes={costIndexes}
                maintenanceIndexes={maintenanceIndexes}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PoliticsTable;
