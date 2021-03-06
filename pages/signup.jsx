import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { useCurrentUser } from "@/hooks/index";

const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  return (
    <>
      <Head>
        <title>react-social-mongo | sign up</title>
      </Head>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <div className="inside">
                  <form onSubmit={handleSubmit} className="form form-cta">
                    <h2 className="form-title">Sign Up</h2>
                    {errorMsg ? (
                      <p className="lead" style={{ color: "red" }}>
                        {errorMsg}
                      </p>
                    ) : null}
                    <div class="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        id="username"
                        type="username"
                        name="username"
                        placeholder="Username"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        aria-describedby="emailHelp"
                        class="form-control"
                      />
                      <small
                        id="username"
                        className="form-text text-muted text-center"
                      >
                        We'll Never Share Your Email With Anyone Else.
                      </small>
                    </div>
                    <div class="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        class="form-control"
                      />
                    </div>
                    <button type="submit" class="button button-cta">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
