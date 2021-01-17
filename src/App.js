import './App.css';
import Hotels from './components/hotels/Hotels';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortAlphaDown, faPoundSign, faStar, faCircle, faAngleDown, faAngleUp, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

library.add(faSortAlphaDown, faPoundSign, faStar, faCircle, faAngleDown, faAngleUp, faCircleNotch);

function App() {
  return (
    <div className="App">
      <Hotels />
    </div>
  );
}

export default App;
