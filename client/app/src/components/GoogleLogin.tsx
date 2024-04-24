import React, { useState, useEffect } from "react";
import { useGoogleLogin, CodeResponse } from "@react-oauth/google";
import axios from "axios";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


interface Profile {
  picture?: string;
  name?: string;
  email?: string;
}


const UseGoogleLogin: React.FC = () => {
  const [user, setUser] = useState<CodeResponse | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn state to false
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      navigate("/");
      toast.success("Welcome back")

    }
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResponse: CodeResponse) => {
      console.log("CodeResponse", codeResponse);

      setUser(codeResponse);
      localStorage.setItem("isLoggedIn", "true"); // Set isLoggedIn to true in local storage
      setIsLoggedIn(true); // Update isLoggedIn state to true
      navigate("/"); // Redirect to homepage on successful sign-in
      toast.success("Login successfull")
    },
    onError: (error: any) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get<Profile>(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log("ResponseData:", res.data);
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div>
      <GoogleLoginButton onClick={login} />
    </div>
  );
};

export default UseGoogleLogin;
