---
title: Oauth 2.0 Flow
date: '28-10-2023'
about: This article describes how an oauth flow occurs internally.
---

## Introduction

Oauth 2.0 helps users to authenticate themselves on a website without ever sharing their credentials with the website they are trying to get authenticated to.

Whenever you see "Sign in with google/github" option remember Oauth 2.0 is working behind the scenes. So here is the complete flow of an oauth system.

## Working of Oauth 2.0

We will take example of authenticating via github.com,
and use this site as an example for login.

You are able to see the contents of this blog because you signed in via your github account. 

Here are the steps how everything happened behind the scenes.

**_This site uses next-auth library to do oauth flow_**

- When you click on Sign-in with github button you call this website's server **/api/auth/signin/github**

- Backend returns a 302 redirect to **https://github.com/login/oauth/authorize** so browser gets the github login page. Params which are attached on this request are **client_id, scope**

- After you login successfully github sends a 302 redirect back to the server at **http://localhost:3000/api/auth/callback/github** , this time the browser also gets an authorisation code from github in it's url param which are passed to above end point.

- Internally server sends github this code along with client secret and client id and gets an access token in return.
And that's it user is now authenticated.

- Now the server generates a JWT token which is sent to browser which validates if user session is valid or not.
User is now redirected to the original page which was requested (homepage here) with a 200 OK code.

- This JWT token is sent to server on every further request to server which validates the user's session. This JWT is stored as a secure cookie inside the user's browser.

- On signing out the JWT token is deleted from user's cookie and thus the session is no longer valid.

## After notes ##
See how you never shared your password/username with this site but still authenticated using JWT token sent by the server.

I have given overview of the system here and by no means this is a detailed flow , there are many things that can be modified here like not using JWT and session instead, how access token is used to access resource server, etc. Feel free to ping me to discuss more.