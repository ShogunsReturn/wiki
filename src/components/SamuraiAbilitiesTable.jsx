import goldIcon from '@site/static/icons/gold.webp';
import riceIcon from '@site/static/icons/rice.webp';
import woodIcon from '@site/static/icons/wood.webp';
import ironIcon from '@site/static/icons/iron.webp';
import reqIcon from '@site/static/icons/advanced.webp';
import { formatTime } from '@site/src/utils/utils.js';

const costIcons = [
  { key: 'Gold', icon: goldIcon, bg: 'bg-yellow-500' },
  { key: 'Rice', icon: riceIcon, bg: 'bg-red-600' },
  { key: 'Wood', icon: woodIcon, bg: 'bg-green-600' },
  { key: 'Iron', icon: ironIcon, bg: 'bg-gray-500' },
];

const getActiveCostIndexes = (skills) => {
  const used = new Array(4).fill(false);
  for (const skill of skills) {
    const cost = skill.cost || [];
    cost.forEach((val, i) => {
      if (val && val > 0) used[i] = true;
    });
  }
  return used.map((u, i) => (u ? i : null)).filter(i => i !== null);
};

const SamuraiAbilitiesTable = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return <p>No skills available.</p>;
  }

  const costIndexes = getActiveCostIndexes(skills);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-fit border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th>Name</th>
            <th>Description</th>
            {costIndexes.map(i => (
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
            <th>
              <img
                src={reqIcon}
                className={`w-6 h-6 bg-amber-900 rounded mx-auto`}
                style={{ minWidth: '24px', minHeight: '24px', maxWidth: '24px', maxHeight: '24px' }}
                title="Requirement"
                alt="Requirement"
              />
            </th>
            <th>Learning Time</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {skills.map((skill, index) => (
            <tr key={index}>
              <td className="font-bold">{skill.name}</td>
              <td style={{ textAlign: "start" }}>{skill.description}</td>
              {costIndexes.map(i => (
                <td key={`cost-${i}`}>{skill.cost?.[i] || '-'}</td>
              ))}
              <td>{`${skill.requirement?.[0]} (${skill.requirement?.[1]})`}</td>
              <td>{formatTime(skill.learning_time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SamuraiAbilitiesTable;
