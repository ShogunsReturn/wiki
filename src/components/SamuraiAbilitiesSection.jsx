import Heading from '@theme/Heading';
import SamuraiAbilitiesTable from '@site/src/components/SamuraiAbilitiesTable';

export default function SamuraiAbilitiesSection({ title, skills, typeOrder }) {
  return (
    <>
      {typeOrder.map((type) => {
        const filteredSkills = skills.filter((s) => s.type === type);
        if (filteredSkills.length === 0) return null;

        return (
          <div key={type} className="mb-8">
            <Heading as="h2" id={`${type}-minister`} className="capitalize">
              {type.charAt(0).toUpperCase() + type.slice(1)} Minister
            </Heading>
            <SamuraiAbilitiesTable skills={filteredSkills} />
          </div>
        );
      })}
    </>
  );
}
