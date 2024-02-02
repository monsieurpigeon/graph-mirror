import { LoginButton, useSession } from "@inrupt/solid-ui-react";
import "./App.css";

function App() {
  const { session } = useSession();
  const idp = "https://login.inrupt.com";

  return (
    <>
      {session.info.isLoggedIn && <pre>{JSON.stringify(session.info)}</pre>}
      <LoginButton
        authOptions={{ clientName: "Mirror" }}
        oidcIssuer={idp}
        redirectUrl={import.meta.env.VITE_REDIRECT_URL}
        onError={console.error}
      />
    </>
  );
}

export default App;
