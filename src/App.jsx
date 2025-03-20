import { Provider } from 'react-redux';
import { store } from './store';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;