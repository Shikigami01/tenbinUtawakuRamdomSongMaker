type Props = {
  onClick: React.MouseEventHandler;
};

export const SlotButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-4 border-2 border-black rounded bg-blue-100"
    >
      ランダムで歌える曲を選ぶ
    </button>
  );
};
