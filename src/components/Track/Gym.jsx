import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@mui/material/Typography';
import { Challenges, loadFromLocalStorage } from '@laboratoria/react';
import data from '../../lib/data';

const topicIds = ['javascript', 'paradigms', 'functional'];

const Topic = ({ topic, lang }) => (
  <>
    <Typography variant="h3">{topic.intl[lang].title}</Typography>
    {topic.units.map((unit) => {
      const partsWIthChallenges = unit.parts.filter(p => !!p.challenges?.length);

      if (!partsWIthChallenges.length) {
        return null;
      }

      return (
        <div key={`${topic.slug}/${unit.slug}`}>
          <Typography variant="h4">{unit.intl[lang].title}</Typography>
          {partsWIthChallenges.map(part => {
            const challenges = part.challenges.map((challenge) => {
              const pathPrefix = `${topic.slug}/${unit.slug}/${part.slug}`;
              const path = `${pathPrefix}/${challenge.slug}/${topic.version}`;
              return {
                ...challenge,
                lastActivityLog: {
                  data: loadFromLocalStorage(path),
                },
              };
            });
            return (
              <Challenges
                key={`${topic.slug}/${unit.slug}/${part.slug}`}
                challenges={challenges}
                lang={lang}
                basedir={`/${lang}/topics/${topic.slug}/${unit.slug}/${part.slug}`}
              />
            );
          })}
        </div>
      );
    })}
  </>
);

const Gym = ({ lang }) => {
  const [topicsWithChallenges, setTopicsWithChallenges] = useState([]);

  const addTopic = (topic) => {
    setTopicsWithChallenges(prev => prev.filter(t => t.slug !== topic.slug).concat(topic));
  };

  useEffect(() => {
    topicIds.forEach(id => data.subscribe(`topics/${id}`, addTopic));

    return () => {
      topicIds.forEach(id => data.unsubscribe(`topics/${id}`, addTopic));
    };
  }, []);

  return (
    <>
      <Typography variant="h2"><FormattedMessage id="gym" /></Typography>
      {topicIds.map((slug) => {
        const topic = topicsWithChallenges.find(t => t.slug === slug);
        if (!topic) {
          return null;
        }
        return (
          <Topic key={slug} topic={topic} lang={lang} />
        );
      })}
    </>
  );
};

export default Gym;