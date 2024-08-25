import { useState, useEffect } from 'react';
import { DisplayPanel } from './components/DisplayPanel';
import { EditPanel } from './components/EditPanel';
import './styles/App.css';

function App() {
  const [data, setData] = useState({generalInfo: {}, eduInfo: {}, experiences: {}});

  useEffect(() => {
    console.log('State changed:', data);
  }, [data]);

  const submitData = (newData) => {
    setData(newData);
    console.log(`new data is ${JSON.stringify(newData)}`);
  }

  return (
    <div className='panels'>
      <EditPanel class="editPanel" submitData={submitData}/>
      <DisplayPanel class="displayPanel" data={data}/>
    </div>
  )
}

export default App
