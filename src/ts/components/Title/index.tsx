type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({ children }) => {
  return <h1 className="text-xl mb-4 border-b-2 border-black">{children}</h1>;
};
