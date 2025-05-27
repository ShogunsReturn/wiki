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
            <th>Rice</th>
            <th>Wood</th>
            <th>Iron</th>
            <th>Gold</th>
            <th>Areas</th>
            <th>Man Hours</th>
            <th>Requirement</th>
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
