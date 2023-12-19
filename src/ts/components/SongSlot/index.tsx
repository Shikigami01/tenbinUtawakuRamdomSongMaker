import { useState } from 'react';
import { SlotButton } from '../../SlotButton';
import { SlotResultText } from '../SlotResultText';

type Props = {
  data: string[];
};

export const SongSlot: React.FC<Props> = ({ data }) => {
  const [slotResult, setSlotResult] = useState<string>('下のボタンを押してね');
  const handleClick = (): string => {
    setSlotResult(data[Math.floor(Math.random() * data.length)]);
    return slotResult;
  };

  return (
    <div className="text-base">
      <SlotResultText resultText={slotResult} />
      <SlotButton onClick={handleClick} />
    </div>
  );
};
