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
