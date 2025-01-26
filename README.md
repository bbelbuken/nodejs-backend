# JWS Authentication

## Introduction

A form of authentication that uses JSON Web Tokens (JWT) to authenticate users. This is a stateless authentication mechanism as the server does not need to store any session information. The server only needs to verify the JWT token to authenticate the user.

## Tokens

When user completes the login process and is authenticated, our rest API will return a JWT token
Access Token is a short-lived token like 5-15 mins
Refresh Token is a long-lived token hours, days

## Hazards

XSS: Cross-Site Scripting
CSRF: Cross-Site Request Forgery

### Access Token

Sent as JSON
Client stores in memory
Do NOT store in local storage or cookie

### Refresh Token

Sent as httpOnly cookie
Not accessible via JS
Must have expiry at some point

 <!-- require('crypto').randomBytes(64).toString('hex') to generate a token -->