interface TitleProps {
  name: string;
}

export function Title({ name }: TitleProps) {
  return <h1 className='text-xl font-bold mb-4'>{name}</h1>;
}
