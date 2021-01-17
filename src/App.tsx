import React from 'react';
import { ApiFontData, GetFontFromApi } from './api';

function App() {
  const [fontData, setFontData] = React.useState<ApiFontData[]>();
  const [selected, setSelected] = React.useState<string>();
  React.useEffect((): void => {
    GetFontFromApi().then(data => {
      setFontData(data);
      setSelected(data[data.length - 1].id);
    });
  }, []);
  return (
    <div>
      <h1>Dynamic Font Loading</h1>
      <div>
        <select>
          {fontData?.map(font => <option selected={font.id === selected} key={font.id} value={font.id}> {font.displayName} </option>)}
        </select>
        <button>Load Font</button>
      </div>
      <div style={{ paddingTop: '10px' }}>
        Font Rendering
      </div>
    </div>
  );
}

export default App;
