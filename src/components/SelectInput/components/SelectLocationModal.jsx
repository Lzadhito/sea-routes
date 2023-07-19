import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import Spinner from '~/components/ui/Spinner';
import IconButton from '~/components/ui/IconButton';
import useDebounce from '~/hooks/useDebounce';

export default function SelectLocationModal({ apiKey, coordinateName = '', onClose, onClickLocation }) {
  const [inputVal, setInputVal] = useState(coordinateName);
  const debouncedInputVal = useDebounce(inputVal, 500);

  const { data = {}, isLoading } = useQuery({
    queryKey: ['searchCarrier', debouncedInputVal],
    queryFn: () =>
      fetch(`https://api.searoutes.com/geocoding/v2/port/${debouncedInputVal}`, {
        mode: 'cors',
        headers: {
          accept: 'application/json',
          'x-api-key': apiKey,
        },
      }).then((resp) => resp.json()),
    enabled: Boolean(debouncedInputVal),
    staleTime: 1000 * 3600,
  });

  // Prefill input value
  useEffect(() => {
    if (coordinateName) setInputVal(coordinateName);
  }, [coordinateName]);

  const handleClickLocation = (coordinates) => {
    onClickLocation(coordinates);
    onClose();
  };

  return (
    <div className="flex flex-col p-10 absolute top-0 left-0 z-10 bg-white w-full h-full max-h-full xl:w-96 overflow-y-hidden">
      <div className="flex gap-4 items-center">
        <IconButton type="leftArrow" onClick={onClose} />

        <input
          className="outlined-input"
          type="search"
          onChange={(event) => setInputVal(event.target.value)}
          value={inputVal}
        />
      </div>
      <div className="flex-1 flex flex-col gap-9 justify-start mt-8 overflow-y-scroll">
        {isLoading ? (
          <Spinner className="self-center mt-24" />
        ) : (
          data?.features?.map((feature) => (
            <button
              className="flex gap-2 items-center border-b border-gray-400 h-9 w-full"
              key={feature.properties?.locode}
              onClick={() => handleClickLocation(feature)}
            >
              <span>{`${feature.properties?.name},`}</span>
              <span className="text-gray-500">{feature.properties?.locode}</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
