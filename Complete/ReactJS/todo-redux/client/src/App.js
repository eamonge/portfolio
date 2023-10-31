import './App.css';
import TodoView from './components/pages/TodoView';
import Topbar from './components/pages/Topbar';

function App() {
  return (
    <div className='div-content-view'>
      <Topbar />
      <div className='div-content-table'>
        <TodoView />
      </div>
    </div>
  );
}

export default App;
