export const getActiveCostIndexes = (skills = []) => {
  const used = new Array(4).fill(false); // assuming 4 cost types
  for (const skill of skills) {
    const values = skill.cost || [0, 0, 0, 0];
    values.forEach((val, i) => {
      if (val) used[i] = true;
    });
  }
  return used.map((u, i) => (u ? i : null)).filter(i => i !== null);
};

export const formatTime = (seconds) => {
  if (!seconds) return '-';
  const hours = seconds / 3600;
  return hours % 24 === 0 ? `${hours / 24} Days` : `${hours} Hours`;
};

export const formatId = (id) => {
  return id.toLowerCase().replace(/\s/g, '-');
}