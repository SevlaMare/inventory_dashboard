interface BtnProps {
  name: string;
  callback: () => void;
}

export function Btn({ name, callback }: BtnProps) {
  return (
    <button
      onClick={callback}
      className='px-4 py-2 bg-blue-500 text-white rounded text-lg hover:bg-blue-600'
    >
      {name}
    </button>
  );
}
