import { ShowcaseBooks } from "./components/ShowcaseBooks";
import { SignIn } from "./components/SignIn";
import { GlobalStyle } from "./styles/global";

import { AuthProvider } from "./hooks/auth";

function App() {
  
  return (
      <AuthProvider>
        {/* <SignIn /> */}
        <ShowcaseBooks />
        <GlobalStyle />
      </AuthProvider>
  );
}

export default App;
