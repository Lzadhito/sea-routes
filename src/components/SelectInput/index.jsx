import { useState } from 'react';

import SelectLocationModal from './components/SelectLocationModal';
import IconButton from '~/components/ui/IconButton';
import Spinner from '~/components/ui/Spinner';

export default function SelectInput({
  apiKey,
  isLoadingFetchRoute,
  coordinate,
  onClickLocation,
  onAddInput,
  onRemoveInput,
  inputsCount,
  showActionButtons = false,
}) {
  const [showSelectLocationModal, setShowSelectLocationModal] = useState(false);

  const handleCloseModal = () => {
    setShowSelectLocationModal(false);
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        <input
          placeholder="Select Port"
          disabled={isLoadingFetchRoute}
          readOnly
          className="underlined-input"
          value={coordinate?.properties?.name}
          onClick={() => setShowSelectLocationModal(true)}
        />

        <div className="w-16 flex gap-4 justify-center">
          {isLoadingFetchRoute && showActionButtons ? (
            <Spinner className="h-6 w-6" />
          ) : (
            <>
              <IconButton onClick={onRemoveInput} invisible={!(showActionButtons && inputsCount > 1)} type="trash" />
              <IconButton onClick={onAddInput} invisible={!(showActionButtons && inputsCount < 5)} type="plus" />
            </>
          )}
        </div>
      </div>

      {showSelectLocationModal && (
        <SelectLocationModal
          apiKey={apiKey}
          coordinateName={coordinate?.properties?.name}
          onClose={handleCloseModal}
          onClickLocation={onClickLocation}
        />
      )}
    </>
  );
}
