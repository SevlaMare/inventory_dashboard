import { Menu } from '@/components/menu';
import { TodoList } from '@/features/todo/todo';
import { Counter } from '@/features/counter/counter';
import { Counter2 } from '@/features/counter2/counter';
import { ProductList } from '@/features/productList/productList';

export function Home() {
  return (
    <>
      <Menu />
      <main className='serif'>
        <ProductList />
        <Counter />
        <Counter2 />
        <TodoList />
      </main>
    </>
  );
}
