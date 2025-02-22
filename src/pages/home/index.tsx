import { Menu } from '@/components/menu';
import { TodoList } from '@/features/todo/todo';
import { Counter } from '@/features/counter/counter';

export function Home() {
  return (
    <>
      <Menu />
      <main className='serif'>
        {/* TODO: bug theme is flashing */}
        <h1>welcome</h1>
        <Counter />
        <TodoList />
      </main>
    </>
  );
}
