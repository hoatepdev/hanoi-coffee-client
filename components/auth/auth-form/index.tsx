"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputFloat from "@/components/common/input-float";
import Main, { FacebookIcon } from "./styled";
import { FcGoogle } from "react-icons/fc";
import { useLoginCredentials } from "@/services/login";
import { useQueryClient } from "@tanstack/react-query";
import { ILoginRequest } from "@/types/login";

const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginRequest>();

  const queryClient = useQueryClient();

  // Initialize mutation
  const mutation = useLoginCredentials({
    mutationOptions: {
      onSuccess: (response) => {
        console.log("⭐ mutation", response);

        queryClient.invalidateQueries({ queryKey: ["loginCredentials"] });
      },
    },
  });

  const onSubmit: SubmitHandler<ILoginRequest> = (data) => {
    console.log("⭐ data", data);

    mutation.mutate(data);
  };

  const handleLoginSocial = (platform: string) => () => {
    console.log("⭐ platform", platform);
  };

  return (
    <Main>
      <div className={`wrapper ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <InputFloat
                type="text"
                placeholder=" "
                className={errors.email ? "input-error" : ""}
                label="Email"
                message={errors.email?.message}
                register={register("email", {
                  required: "Email Address is required",
                })}
              />
              <InputFloat.Password
                placeholder=" "
                register={register("password", {
                  required: "Password is required",
                })}
                className={errors.password ? "input-error" : ""}
                label="Password"
                message={errors.password?.message}
              />
              <Button type="submit">Login</Button>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <Button variant="outline" onClick={handleLoginSocial("google")}>
                  <FcGoogle />
                </Button>
                <Button variant="outline">
                  <FacebookIcon />
                </Button>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <FcGoogle />
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => setIsSignUpMode(true)}
              >
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => setIsSignUpMode(false)}
              >
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default AuthForm;
