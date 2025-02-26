import { Menu } from '@/components/menu';
import { TodoList } from '@/features/todo/todo';
import { Counter } from '@/features/counter/counter';
import { ProductList } from '@/features/productList/productList';

export function Home() {
  return (
    <>
      <Menu />
      <main className='serif'>
        <ProductList />
        <Counter />
        <TodoList />
      </main>
    </>
  );
}
