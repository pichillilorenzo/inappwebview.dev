import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import type BlogPostPaginatorType from '@theme/BlogPostPaginator';
import type {WrapperProps} from '@docusaurus/types';
import {DonateFooter} from "@site/src/components/DonateFooter";

type Props = WrapperProps<typeof BlogPostPaginatorType>;

export default function BlogPostPaginatorWrapper(props: Props): JSX.Element {
  return (
      <>
          <hr/>
          <DonateFooter/>
          <BlogPostPaginator {...props} />
      </>
  );
}
