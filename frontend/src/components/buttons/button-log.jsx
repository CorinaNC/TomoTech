import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";

export const ButtonLog = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
          <LoginButton />
      )}
      {isAuthenticated && (
          <LogoutButton />
      )}
    </div>
  );
};