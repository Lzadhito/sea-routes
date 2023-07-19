import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import Map from '~/components/Map';
import SelectInput from '~/components/SelectInput';
import IconButton from '~/components/ui/IconButton ';
import { COLORS } from '~/components/ui/constants';

const App = () => {
  const [selectedCoordinates, setSelectedCoordinates] = useState([null]);
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_SEAROUTES_KEY);
  const [showAPIKeyInput, setShowAPIKeyInput] = useState(true);
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

  const handleRemoveInput = (coordinatedIdx) => {
    setSelectedCoordinates((prev) => prev.filter((_, index) => index !== coordinatedIdx));
  };

  const routeCoordinates = useMemo(() => data?.features?.flatMap((feat) => feat.geometry.coordinates), [data]);

  return (
    <div className="w-screen h-screen flex overflow-hidden flex-col xl:flex-row">
      <div className="p-6 gap-2 flex flex-col w-full xl:h-screen xl:max-h-screen xl:w-96">
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
      </div>
      <Map selectedCoordinates={selectedCoordinates} routeCoordinates={routeCoordinates} className="h-full grow" />
      {showAPIKeyInput ? (
        <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl flex-col flex gap-2">
          <div className="flex">
            <label htmlFor="apiKeyInput" className="font-medium flex-1">
              Used API Key
            </label>
            <IconButton size="4" onClick={() => setShowAPIKeyInput(false)} type="close" />
          </div>
          <input
            className="outlined-input"
            name="apiKeyInput"
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
          />
        </div>
      ) : (
        <button
          onClick={() => setShowAPIKeyInput(true)}
          className={`absolute bottom-10 right-10 w-10 h-10 rounded-full bg-[${COLORS.primary}] text-white`}
        >
          API
        </button>
      )}
    </div>
  );
};

export default App;
