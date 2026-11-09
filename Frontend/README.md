# EcoCollect Frontend

Angular client application for **EcoCollect – Smart Waste Management Platform**.

## Scope
This folder contains the browser client only. It is one Angular SPA organized by EcoCollect business capabilities. It does not contain Spring Boot microservices or databases.

**Communication rule:** Angular calls backend APIs through the Spring Cloud API Gateway only. It must not call individual microservice ports directly.

## Architecture
```text
Citizens / Agents / Center Managers / Organizations / Admins
                         |
                         v
                EcoCollect Angular SPA
       +-----------------------------------------+
       | Core: Keycloak, guards, JWT interceptor |
       | Shared: reusable UI and common models  |
       | Features: Reports / Collections        |
       | Recycling / Campaigns / Rewards / Impact|
       +-----------------------------------------+
                         |
                    HTTP + JWT
                         |
                         v
                Spring Cloud API Gateway
                         |
               Backend microservices
```

## Feature areas
| Folder | Responsibility | Backend owner |
|---|---|---|
| reports | Submit and track environmental reports | Report Management |
| collections | Pickup requests, assignments, completion | Collection Management |
| recycling | Centers, accepted materials, recycling records | Recycling Center |
| campaigns | Campaign discovery and participation | Environmental Campaign |
| rewards | Eco-points, badges and rewards | Rewards & Eco-Points |
| impact | Waste and CO2 indicators | Impact Analytics |
| admin | Administrative client screens | Admin / Keycloak roles |

These are feature areas in one Angular application, not separate Angular apps or backend services.

## Main routes
`/dashboard`, `/reports`, `/collections`, `/recycling-centers`, `/campaigns`, `/rewards`, `/impact`, `/admin`.

## Configuration
Edit `src/environments/environment.ts`:
- `apiBaseUrl`: API Gateway URL (default `http://localhost:8080/api`)
- `keycloak.url`: Keycloak URL (default `http://localhost:8180`)
- `keycloak.realm`: team realm name
- `keycloak.clientId`: public Angular client ID

Configure Keycloak with the actual frontend origin and Authorization Code + PKCE. Never put a client secret in browser code. Role names in route metadata must match the Keycloak realm and backend policy. Frontend guards are for navigation only; backend authorization remains mandatory.

## Run
Prerequisites: Node.js LTS and npm.
```bash
npm install
npm start
```
Open `http://localhost:4200`.

Build with `npm run build`.

## Validation 1 design choices
- One Angular SPA, modularized by business capability.
- Lazy-loaded feature routes.
- Centralized API Gateway base URL.
- Keycloak authentication integration point and JWT interceptor.
- Feature folders isolate models and API services from UI components.
- Current feature pages are structural placeholders. Align endpoint paths and DTOs with the final backend OpenAPI contracts before implementing live workflows.
- The project is a design-stage client foundation, not a claim that the backend integration is complete.
