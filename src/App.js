import './App.css';
import useJsonFetch from './hooks/useJsonFetch';

function Data() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data', []);
  return (
    <>
      {loading && <p>Loading...</p>}
      <div>
        {data.status}
      </div>
    </>
  )
}

function Error() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error', []);
  return (
    <>
      {loading && <p>Loading...</p>}
      <div>
        {data.status}
      </div>
    </>
  )
}

function Loading() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', []);
  return (
    <>
      {loading && <div>Loading...</div>}
      <div>
        {data.status}
      </div>
    </>
  )
}

function App() {
  return (
    <div className='App'>
      <Data />
      <Error />
      <Loading />
    </div>
  )
}

export default App;
