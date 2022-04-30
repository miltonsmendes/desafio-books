import { ShowcaseBooks } from "./components/ShowcaseBooks";
import { SignIn } from "./components/SignIn";

import {LoginScreen} from './screens/LoginScreen';
import {HomeScreen} from './screens/HomeScreen';
import { GlobalStyle } from "./styles/global";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from "./hooks/auth";

function App() {
  
  return (
      <AuthProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
        </Routes>
        </BrowserRouter>
        {/* <SignIn /> */}
        {/* <HomeScreen /> */}
        <GlobalStyle />
      </AuthProvider>
  );
}

export default App;
