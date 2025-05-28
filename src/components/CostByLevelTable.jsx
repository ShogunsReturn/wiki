import riceIcon from '@site/static/icons/rice.webp';
import woodIcon from '@site/static/icons/wood.webp';
import ironIcon from '@site/static/icons/iron.webp';
import goldIcon from '@site/static/icons/gold.webp';
import manHoursIcon from '@site/static/icons/man_hours.webp';
import reqIcon from '@site/static/icons/advanced.webp';
import areasIcon from '@site/static/icons/areas.webp';

const costIcons = [
  { key: 'Rice', icon: riceIcon, bg: 'bg-red-600' },
  { key: 'Wood', icon: woodIcon, bg: 'bg-green-600' },
  { key: 'Iron', icon: ironIcon, bg: 'bg-gray-500' },
  { key: 'Gold', icon: goldIcon, bg: 'bg-yellow-500' },
  { key: 'Areas', icon: areasIcon, bg: 'bg-amber-900' },
  { key: 'Man hours', icon: manHoursIcon, bg: 'bg-blue-600' },
  { key: 'Requirement', icon: reqIcon, bg: 'bg-amber-900' },
];

export default function CostByLevelTable({ building }) {
  const isQuantity = building.quantifiable === true;
  const costs = Array.isArray(building.costs) ? building.costs : [];

  // Only include objects that have a level key (true row data)
  const filteredCosts = costs.filter(
    (cost) => typeof cost.level !== "undefined"
  );

  return (
    <div>
      <table className="text-center">
        <thead>
          <tr>
            <th>{isQuantity ? 'Quantity' : 'Level'}</th>
            {costIcons.map((iconObj) => (
              <th key={`cost-head-${iconObj.key}`}>
                <img
                  src={iconObj.icon}
                  className={`w-6 h-6 ${iconObj.bg} rounded mx-auto`}
                  style={{ minWidth: '24px', minHeight: '24px', maxWidth: '24px', maxHeight: '24px' }}
                  title={iconObj.key}
                  alt={iconObj.key}
                />
              </th>
            ))}
            {!isQuantity && <th>Max Level</th>}
          </tr>
        </thead>
        <tbody>
          {filteredCosts.map((cost, index) => (
            <tr key={index}>
              <td>{cost.level ? cost.level : '-'}</td>
              <td>{cost.Rice ? cost.Rice : '-'}</td>
              <td>{cost.Wood ? cost.Wood : '-'}</td>
              <td>{cost.Iron ? cost.Iron : '-'}</td>
              <td>{cost.Gold ? cost.Gold : '-'}</td>
              <td>{cost.area ? cost.area : '-'}</td>
              <td>{cost.man_hours ? cost.man_hours : '-'}</td>
              <td>
                {building.dependency_name
                  ? `${building.dependency_name} (${building.dependency_quantity})`
                  : '-'}
              </td>
              {!isQuantity && (
                <td>{building.max_level ?? '-'}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
