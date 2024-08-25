import { useState, useEffect } from 'react';
import { DisplayPanel } from './components/DisplayPanel';
import { EditPanel } from './components/EditPanel';
import './styles/App.css';

function App() {
  const [data, setData] = useState({generalInfo: {}});

  useEffect(() => {
    console.log('State changed:', data);
  }, [data]);

  const submitData = (newData) => {
    setData(newData);
    console.log(`new data is ${JSON.stringify(newData)}`);
  }

  return (
    <div className='panels'>
      <EditPanel submitData={submitData}/>
      <DisplayPanel data={data}/>
    </div>
  )
}

export default App
