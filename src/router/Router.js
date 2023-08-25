import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from '../webpages/index';

const WebPageRouter = () => {
    return (
        <Router>
           <Routes>
              <Route
                 path='/'
                 element={<HomePage/>}
              />
           </Routes>
        </Router>
     );

}

export default WebPageRouter;