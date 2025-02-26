import { useProductListQuery } from '@/service/api/products';

export function ProductList() {
  // out of the box, for every endpoint!
  const { data, isLoading, isError, isSuccess } = useProductListQuery();

  if (isLoading) {
    return 'loading';
  }

  if (isError) {
    return 'something went wrong';
  }

  return (
    <div>
      <p>list</p>
      {data.map(item => (
        <p id={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
