import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@chakra-ui/react"

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button
    variant={"circular"} 
    onClick={handleLogout}
    width="75px"
    height="75px"
    minWidth="75px"
    minHeight="75px"
    borderRadius="50%"
    flexShrink={0}>
      Log Out
    </Button>
  );
};