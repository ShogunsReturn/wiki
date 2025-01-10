import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build your village',
    Image: require('@site/static/img/buildVillage.webp').default,
    description: (
      <>
        Lay the foundation of your empire by constructing and upgrading your village. 
        Manage resources, develop infrastructure, and create a thriving community to support your growing ambitions.
      </>
    ),
  },
  {
    title: 'Dominate your rivals',
    Image: require('@site/static/img/dominateRivals.webp').default,
    description: (
      <>
        Challenge players worldwide in strategic battles. 
        Forge alliances, deploy your armies, and outwit your enemies to claim supremacy on the battlefield.
      </>
    ),
  },
  {
    title: 'Become Shogun',
    Image: require('@site/static/img/becomeShogun.webp').default,
    // Svg: require('@site/static/img/logoKanji.svg').default,
    description: (
      <>
        Rise to power and claim the ultimate title of Shogun. 
        Prove your leadership, strategy, and might to unify Feudal Japan under your banner.
      </>
    ),
  },
];

function Feature({Svg, Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={Image} className={styles.featureSvg} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
