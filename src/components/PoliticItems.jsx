import Heading from '@theme/Heading';
import { formatId } from '@site/src/utils/utils.js';

const PoliticItems = ({ category }) => {
  return category && category.map((politic) => {
    return (
      <div key={politic.name} className="mb-6">
        <Heading as="h3" id={formatId(politic.name)} className="capitalize">
          {politic.name}
        </Heading>
        <p>{politic.description || 'No description available.'}</p>
      </div>
    );
  });
};

export default PoliticItems;
