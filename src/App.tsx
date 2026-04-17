import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DocsLayout } from './docs/layout/DocsLayout';
import Introduction from './docs/pages/Introduction';
import ButtonDoc from './docs/pages/ButtonDoc';
import InputDoc from './docs/pages/InputDoc';
import CheckboxDoc from './docs/pages/CheckboxDoc';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DocsLayout />}>
          <Route index element={<Introduction />} />
          <Route path='button' element={<ButtonDoc />} />
          <Route path='input' element={<InputDoc />} />
          <Route path='checkbox' element={<CheckboxDoc />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
