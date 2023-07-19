import { useState } from 'react';

import SelectLocationModal from './components/SelectLocationModal';
import IconButton from '~/ui/IconButton';
import Spinner from '~/ui/Spinner';

export default function SelectInput({
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
          disabled={isLoadingFetchRoute}
          readOnly
          className="underlined-input"
          value={coordinate?.properties?.name}
          onClick={() => setShowSelectLocationModal(true)}
        />

        <div className="w-16 flex gap-4 justify-center">
          {isLoadingFetchRoute && showActionButtons ? (
            <Spinner size="6" />
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
          coordinateName={coordinate?.properties?.name}
          onClose={handleCloseModal}
          onClickLocation={onClickLocation}
        />
      )}
    </>
  );
}
