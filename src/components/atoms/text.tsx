interface TextProps {
  content: string;
}

export function Text({ content }: TextProps) {
  return <p className='text-center text-lg font-bold mb-4'>{content}</p>;
}
