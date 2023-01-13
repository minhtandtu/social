import { request, gql } from "graphql-request";

const GraphAPI = process.env.PUBLIC_API_ENDPOINT;
export async function getProjects({ locale }) {
  const query = gql`
    query myProjects($locale: Locale!) {
      projectsConnection(
        first: 100
        where: { feature: true, locale: $locale }
      ) {
        edges {
          node {
            id
            name
            slug
            excerpt
            feature
            locale
            image(locales: en) {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const res = await request(GraphAPI, query, { locale });
  const result = res.projectsConnection.edges;
  return result;
}

export async function getNavigation({ locale }) {
  const query = gql`
    query MyQuery($locale: Locale!) {
      navigations(locales: [$locale]) {
        name
        slug
        locale
      }
    }
  `;

  const res = await request(GraphAPI, query, { locale });
  const result = res.navigations;
  return result;
}

export async function getCategories({ locale }) {
  const query = gql`
    query MyQueryCategory($locale: Locale!) {
      categoriesConnection(locales: [$locale]) {
        edges {
          node {
            name
            slug
            locale
            projects(locales: [$locale]) {
              id
              name
              slug
              excerpt
              feature
              locale
              image(locales: [en]) {
                url
              }
            }
          }
        }
      }
    }
  `;

  const res = await request(GraphAPI, query, { locale });
  const result = res.categoriesConnection.edges;
  return result;
}
export async function getNewProjects({ locale }) {
  const query = gql`
    query MyQuery($locale: Locale!) {
      projects(first: 100, locales: [$locale]) {
        name
        slug
        excerpt
        feature
        id
        locale
        image(locales: en) {
          url
        }
      }
    }
  `;

  const result = await request(GraphAPI, query, { locale });
  return result.projects;
}

export async function getMember({ locale }) {
  const query = gql`
    query MyMEMBER($locale: Locale!) {
      members(locales: [$locale]) {
        locale
        name
        position
        team {
          ... on Team {
            id
            name
          }
        }
        image(locales: en) {
          url
        }
      }
    }
  `;
  const result = await request(GraphAPI, query, { locale });
  return result.members;
}
