import { useAuth0 } from "@auth0/auth0-react";
import { Heading } from "@chakra-ui/react";
import React from "react";
import "./profile.css"


export const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && <div className="p">Welcome back, {user.nickname}</div>
    );
};