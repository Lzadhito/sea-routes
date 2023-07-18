import { useState } from 'react';
import Map from './components/Map';
import SelectInput from './components/SelectionBar/components/SelectInput';
import { DUMMY_ROUTES } from './constants';

const App = () => {
  const [selectedCoordinates, setSelectedCoordinates] = useState([null]);

  // const { data = {} } = useQuery({
  //   queryKey: ['searchRoutes', selectedCoordinates],
  //   queryFn: function () {
  //     const stringifyCoordinates = selectedCoordinates.reduce(
  //       (acc, curr, index) => (acc += `${index !== 0 ? ';' : ''}${curr.geometry?.coordinates?.join(',')}`),
  //       ''
  //     );
  //     return fetch(`https://api.searoutes.com/route/v2/sea/${stringifyCoordinates}`, {
  //       headers: {
  //         accept: 'application/json',
  //         'x-api-key': import.meta.env.VITE_SEAROUTES_KEY,
  //       },
  //     })
  //       .then((resp) => resp.json())
  //       .then((val) => val);
  //   },
  //   enabled: selectedCoordinates.length > 1 && selectedCoordinates.every((coordinate) => coordinate !== null),
  // });

  // console.log(data);

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
    <div className="w-screen h-screen flex overflow-hidden flex-col xl:flex-row">
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
      <Map
        routeCoordinates={
          selectedCoordinates.length > 1 && selectedCoordinates.every((coordinate) => coordinate !== null)
            ? DUMMY_ROUTES.features.flatMap((feat) => feat.geometry.coordinates)
            : []
        }
        className="h-full grow"
      />
    </div>
  );
};

export default App;
