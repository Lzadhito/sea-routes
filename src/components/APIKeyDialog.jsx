import { useState } from 'react';
import IconButton from '~/components/ui/IconButton';

export default function APIKeyDialog({ apiKey, setApiKey }) {
  const [showAPIKeyInput, setShowAPIKeyInput] = useState(true);

  if (showAPIKeyInput)
    return (
      <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl flex-col flex gap-2">
        <div className="flex">
          <label htmlFor="apiKeyInput" className="font-medium flex-1 text-sm">
            Change API Key here
          </label>
          <IconButton className="w-4 h-4" onClick={() => setShowAPIKeyInput(false)} type="close" />
        </div>
        <input
          className="outlined-input"
          name="apiKeyInput"
          value={apiKey}
          onChange={(event) => setApiKey(event.target.value)}
        />
      </div>
    );

  return (
    <button
      onClick={() => setShowAPIKeyInput(true)}
      className={`absolute bottom-10 right-10 w-10 h-10 rounded-full bg-primary text-white text-sm font-semibold`}
    >
      API
    </button>
  );
}
