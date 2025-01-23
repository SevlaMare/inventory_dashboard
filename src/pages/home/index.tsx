import { Menu } from '@/components/menu';
import { TodoList } from '@/features/todo/todo';

export function Home() {
  return (
    <>
      <Menu />
      <main className='serif'>
        {/* TODO: bug theme is flashing */}
        <h1>welcome</h1>
        <TodoList />
      </main>
    </>
  );
}
