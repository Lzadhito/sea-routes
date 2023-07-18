import { useState } from 'react';
import { DUMMY_LOCATIONS } from '../constants';
import { useEffect } from 'react';
// import { useQuery } from 'react-query';

export default function SelectInput({
  coordinate,
  onClickLocation,
  onAddInput,
  onRemoveInput,
  inputsCount,
  showActionButtons = false,
}) {
  const [showSelectLocationModal, setShowSelectLocationModal] = useState(false);
  const [inputVal, setInputVal] = useState(coordinate?.properties?.name || '');

  // Prefill input value
  useEffect(() => {
    if (coordinate?.properties?.name) setInputVal(coordinate.properties.name);
  }, [coordinate?.properties?.name]);

  // console.log(inputVal);
  // const { data = {} } = useQuery({
  //   queryKey: ['searchCarrier', inputVal],
  //   queryFn: () =>
  //     fetch(`https://app.searoutes.com/api/points-search?value=${inputVal}`, {
  //       mode: 'no-cors',
  //       method: 'GET',
  //     })
  //       .then((resp) => resp.json())
  //       .then((val) => val),
  //   enabled: !!inputVal,
  // });

  // console.log(data);

  const handleClickLocation = (coordinates) => {
    onClickLocation(coordinates);
    setShowSelectLocationModal(false);
  };

  return (
    <>
      <div className="flex gap-4 items-center bg-black">
        <input
          readOnly
          className="outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          value={coordinate?.properties?.name}
          onClick={() => setShowSelectLocationModal(true)}
        />

        {showActionButtons && inputsCount < 5 && (
          <svg
            onClick={onAddInput}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {showActionButtons && inputsCount > 1 && (
          <svg
            onClick={onRemoveInput}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        )}
      </div>
      {showSelectLocationModal && (
        <div
          // onClick={() => setShowSelectLocationModal((prev) => !prev)}
          className="p-10 transition-opacity absolute top-0 left-0 z-10 bg-green-200 w-full h-full xl:h-screen xl:max-h-screen xl:w-96"
        >
          <input
            defaultValue={coordinate?.properties?.name}
            onChange={(event) => setInputVal(event.target.value)}
            className="outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            value={inputVal}
            // onClick={() => setShowSelectLocationModal(true)}
          />
          <div className="grid gap-9 justify-start mt-8">
            {DUMMY_LOCATIONS?.features?.map((feature) => (
              <button
                className="block text-left  border-b h-8"
                key={feature.properties?.locode}
                onClick={() => handleClickLocation(feature)}
              >
                {feature.properties?.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
