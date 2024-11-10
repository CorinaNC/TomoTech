import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@chakra-ui/react"

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        screen_hint: "signup",
      }
    });
  };

  return (
    <Button
    variant={"circular"}
    onClick={handleLogin}
    width="75px"
    height="75px"
    minWidth="75px"
    minHeight="75px"
    borderRadius="50%"
    flexShrink={0}>
      Log In
    </Button>
  );
};