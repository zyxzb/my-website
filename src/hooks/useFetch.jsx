import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const query = `
{
  allProjectsModels {
    id
    name
    githubUrl
    pageUrl
    imageUrl {
      url
    }
    tech {
      value
    }
  }
}
`;

const useFetch = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getProjects = useCallback(() => {
    setLoading(true);
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        },
      )
      .then(({ data: { data } }) => {
        setProjects(data.allProjectsModels);
        setLoading(false);
      })
      .catch((err) => {
        setError(`ERROR: ${err.message}`);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }
    getProjects();
    // eslint-disable-next-line
  }, [getProjects]);

  return [{ projects, error, loading }];
};

export default useFetch;
