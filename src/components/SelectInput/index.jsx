import { useState } from 'react';
import SelectLocationModal from '~/components/SelectLocationModal';
import IconButton from '~/ui/IconButton';

export default function SelectInput({
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
          readOnly
          className="underlined-input"
          value={coordinate?.properties?.name}
          onClick={() => setShowSelectLocationModal(true)}
        />
        <IconButton onClick={onRemoveInput} invisible={!(showActionButtons && inputsCount > 1)} type="trash" />
        <IconButton onClick={onAddInput} invisible={!(showActionButtons && inputsCount < 5)} type="plus" />
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
