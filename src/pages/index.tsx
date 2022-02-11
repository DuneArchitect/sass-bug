import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { FrontPageQuery } from 'types/graphql';
import * as styles from 'styles/pages/index.module.scss';

interface FrontPageProps {
  data: FrontPageQuery;
}

function FrontPage({ data }: FrontPageProps): ReactElement {
  if (!data.prismicFrontPage?.data) {
    throw new Error('FrontPage data unable to be loaded');
  }

  const title = data.prismicFrontPage.data.title?.text || 'Missing Title';
  const bodyText = data.prismicFrontPage.data.body_text?.text || 'Empty body';

  return (
    <div className={styles.FrontPage}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{bodyText}</p>
    </div>
  );
}

export const query = graphql`
  query FrontPage {
    prismicFrontPage {
      data {
        body_text {
          text
        }
        title {
          text
        }
      }
    }
  }
`;

export default FrontPage;
