# User Initiated Flow

## Overview
This project implements a frontend flow that navigates based on specific URL parameters.  
The parameters — `ctx`, `service`, `mno`, and `country` — determine which page the user lands on.  
If the parameters are valid, the user is routed to the corresponding page; if not, they see a **404 page**.

## How It Works
1. The application reads parameters from the incoming URL.
2. It validates them against the allowed configuration (services, MNOs, and countries).
3. If valid, the app renders the correct landing page.
4. If invalid, the app shows a **404 Not Found** page.

## URL Parameter Reference

The application validates the following parameters from the URL before navigating:

| ctx        | service     | mno    | country | ussd        | local url                                                                                 |
|------------|-------------|--------|---------|-------------|-------------------------------------------------------------------------------------|
| subscribe  | y_dot_tv    | telkom | za      | *179*11#    | http://localhost:5173/?ctx=subscribe&service=y_dot_tv&mno=telkom&country=za         |
| subscribe  | s_7         | telkom | za      | *179*12#    | http://localhost:5173/?ctx=subscribe&service=s_7&mno=telkom&country=za              |
| subscribe  | ydot_games  | telkom | za      | *179*28#    | http://localhost:5173/?ctx=subscribe&service=ydot_games&mno=telkom&country=za       |
| subscribe  | g_w         | telkom | za      | *179*10#    | http://localhost:5173/?ctx=subscribe&service=g_w&mno=telkom&country=za              |
| subscribe  | b_c         | telkom | za      | *179*22#    | http://localhost:5173/?ctx=subscribe&service=b_c&mno=telkom&country=za              |
| subscribe  | ydot_games  | mtn    | za      | *686*7552#  | http://localhost:5173/?ctx=subscribe&service=ydot_games&mno=mtn&country=za          |





