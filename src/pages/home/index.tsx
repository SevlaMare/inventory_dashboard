import { Menu } from '@/components/menu';
import { TodoList } from '@/features/todo/todo';
import { Counter } from '@/features/counter/counter';

export function Home() {
  return (
    <>
      <Menu />
      <main className='serif'>
        <Counter />
        <TodoList />
      </main>
    </>
  );
}
