import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import CategoryFilters from '../components/CategoryFilters';
import ProductsFilter from '../components/ProductsFilter';
import Hero from '../components/Hero';
import { ALL_PRODUCTS_QUERY } from '../graphql/queries';
import { Product } from '../graphql/types';
import client from '../lib/apolloClient';
import ProductsHeader from '../components/ProductsHeader';
import ProductsList from '../components/ProductsList';
import NewsLetter from '../components/Newsletter';

type HomeProps = {
  products: Product[];
};

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ProductsHeader />
      <ProductsFilter />
      <ProductsList products={products} />
      <NewsLetter />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  /* eslint-disable */

  const { data: { products }} = await client.query({
    query: ALL_PRODUCTS_QUERY,
  });

  /* eslint-enable */

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      products,
    },
  };
};
