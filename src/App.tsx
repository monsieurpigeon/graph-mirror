import { LoginButton, useSession } from "@inrupt/solid-ui-react";
import { useState } from "react";
import "./App.css";

function App() {
  const { session } = useSession();
  const [idp, setIdp] = useState("https://login.inrupt.com");

  return (
    <>
      {session.info.isLoggedIn && <pre>{JSON.stringify(session.info)}</pre>}
      <input
        id="idp"
        placeholder="Identity Provider"
        defaultValue={idp}
        onChange={(e) => setIdp(e.target.value)}
      />
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
