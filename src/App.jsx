import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import Map from '~/components/Map';
import SelectInput from '~/components/SelectInput';
import APIKeyDialog from './components/APIKeyDialog';

const App = () => {
  const [selectedCoordinates, setSelectedCoordinates] = useState([null]);
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_SEAROUTES_KEY);
  const isCompleteCoordinates = selectedCoordinates.every((coordinate) => coordinate !== null);

  const { data = {}, isLoading: isLoadingFetchRoute } = useQuery({
    queryKey: ['searchRoutes', selectedCoordinates],
    queryFn: function () {
      const stringifyCoordinates = selectedCoordinates.reduce(
        (acc, curr, index) => (acc += `${index !== 0 ? ';' : ''}${curr.geometry?.coordinates?.join(',')}`),
        ''
      );
      return fetch(`https://api.searoutes.com/route/v2/sea/${stringifyCoordinates}`, {
        headers: {
          accept: 'application/json',
          'x-api-key': apiKey,
        },
      })
        .then((resp) => resp.json())
        .then((val) => val);
    },
    staleTime: 1000 * 3600,
    enabled: selectedCoordinates.length > 1 && isCompleteCoordinates,
  });

  const handleClickLocation = (location, index) => {
    const newCoordinates = [...selectedCoordinates];
    newCoordinates[index] = location;
    setSelectedCoordinates(newCoordinates);
  };

  const handleAddInput = () => {
    setSelectedCoordinates((prev) => [...prev, null]);
  };

  const handleRemoveInput = () => {
    const newCoordinates = [...selectedCoordinates];
    newCoordinates.pop();
    setSelectedCoordinates(newCoordinates);
  };

  const routeCoordinates = useMemo(() => data?.features?.flatMap((feat) => feat.geometry.coordinates), [data]);

  return (
    <div className="w-screen h-screen flex overflow-hidden flex-col xl:flex-row">
      <section className="p-6 gap-2 flex flex-col w-full xl:h-screen xl:max-h-screen xl:w-96">
        {selectedCoordinates.map((coordinate, index) => (
          <SelectInput
            apiKey={apiKey}
            isLoadingFetchRoute={isLoadingFetchRoute}
            coordinate={coordinate}
            key={`input-${index}`}
            onAddInput={handleAddInput}
            onRemoveInput={() => handleRemoveInput(index)}
            showActionButtons={index === selectedCoordinates.length - 1}
            inputsCount={selectedCoordinates.length}
            onClickLocation={(coordinates) => handleClickLocation(coordinates, index)}
          />
        ))}
      </section>
      <Map selectedCoordinates={selectedCoordinates} routeCoordinates={routeCoordinates} className="h-full grow" />
      <APIKeyDialog apiKey={apiKey} setApiKey={setApiKey} />
      <a
        className="absolute bottom-1 right-8 italic text-sm"
        href="https://github.com/Lzadhito/sea-routes"
        target="_blank"
        rel="noreferrer"
      >
        @Github
      </a>
    </div>
  );
};

export default App;
