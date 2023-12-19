type Props = {
  resultText: string;
};

export const SlotResultText: React.FC<Props> = ({ resultText }) => {
  return <div className="mb-4">{resultText}</div>;
};
