import { createApi } from '@reduxjs/toolkit/query/react';

// mock data
const fakeDataList = [
  {
    id: 1,
    name: 'prodA',
  },
  {
    id: 2,
    name: 'prodB',
  },
];

const fakeDataDetail = [
  {
    id: 1,
    name: 'prodA',
    price: 321,
  },
  {
    id: 2,
    name: 'prodB',
    price: 123,
  },
];

function mockLoading() {
  return new Promise(resolve => setTimeout(resolve, 500));
}

// define api == ProductsApiSlice (is a slicer!)
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: () => {},
  endpoints: build => ({
    productList: build.query({
      // async api calls
      queryFn() {
        return { data: fakeDataList };
      },
    }),
    productDetail: build.query({
      queryFn() {
        return { data: fakeDataDetail };
      },
    }),
  }),
});

// auto hooks (aka custom useData):
export const { useProductListQuery, useProductListDetailQuery } = productApi;
