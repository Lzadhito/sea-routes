import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function SelectionBar({ generateRandomRoute }) {
  const [value, setValue] = useState('');
  // const { data } = useQuery(['searchCarrier', value], () =>
  //   fetch(`https://api.searoutes.com/search/v2/carriers?name=${value}`, {
  //     mode: 'cors',
  //     headers: new Headers({
  //       'Access-Control-Allow-Origin': '*',
  //       accept: 'application/json',
  //       'x-api-key': 'OsuLTyt3J33geXUyjRByi5NIlXUfAEit1TNBB909',
  //     }),
  //   })
  // );

  useEffect(() => {
    fetch(`https://api.searoutes.com/search/v2/carriers?name=msc`, {
      headers: {
        accept: 'application/json',
        'x-api-key': 'OsuLTyt3J33geXUyjRByi5NIlXUfAEit1TNBB909',
      },
    })
      .then((j) => j.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-blue-400 flex flex-col gap-8 p-10 w-full max-h-32 xl:h-screen xl:max-h-screen xl:w-96">
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <input />
      <button onClick={generateRandomRoute}>generate route</button>
    </div>
  );
}
