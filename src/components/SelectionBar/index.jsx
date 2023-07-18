import { useState } from 'react';
import SelectInput from './components/SelectInput';

export default function SelectionBar({ setRouteCoordinates }) {
  const [selectedCoordinates, setSelectedCoordinates] = useState([null]);

  const handleClickLocation = (location, index) => {
    const newCoordinates = [...selectedCoordinates];
    newCoordinates[index] = location;
    setSelectedCoordinates(newCoordinates);
  };

  const handleAddInput = () => {
    setSelectedCoordinates((prev) => [...prev, null]);
  };

  const handleRemoveInput = (coordinatedIdx) => {
    setSelectedCoordinates((prev) => prev.filter((_, index) => index !== coordinatedIdx));
  };

  return (
    <div className="bg-blue-400 flex flex-col w-full xl:h-screen xl:max-h-screen xl:w-96">
      {selectedCoordinates.map((coordinate, index) => (
        <SelectInput
          coordinate={coordinate}
          key={`input-${index}`}
          onAddInput={handleAddInput}
          onRemoveInput={() => handleRemoveInput(index)}
          showActionButtons={index === selectedCoordinates.length - 1}
          inputsCount={selectedCoordinates.length}
          onClickLocation={(coordinates) => handleClickLocation(coordinates, index)}
        />
      ))}
    </div>
  );
}
