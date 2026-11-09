# Eco microservices workspace

Seven independent Spring Boot applications, following the AWD reference's
`backend/microservices/<service>` layout. This is environment preparation only:
startup classes, build files, database configuration, basic controller/service/
repository classes, and empty packages for the remaining layers. There are no
business endpoints, entities, business methods, events, or inter-service calls.

Java 17 and Spring Boot 3.2.5 match AWD's Java `job` and `candidat` applications.
All seven Eco services use Spring Boot, including Notification and Impact Analytics.
The Maven wrapper downloads Maven 3.9.9. The first build needs internet access to
download Maven and dependencies.

## Services

| Application | Responsibility | Database | Default port |
| --- | --- | --- | --- |
| report | Environmental reports | H2 | 8081 |
| collection | Waste collection operations | H2 | 8082 |
| recycling | Recycling centers and waste processing | MySQL | 8083 |
| campaign | Environmental campaigns and participation | H2 | 8084 |
| reward | Points, badges and rewards | H2 | 8085 |
| impact-analytics | Environmental statistics and CO2 savings | MongoDB | 8086 |
| notification | Notifications and delivery history | H2 | 8087 |

Notification uses the H2 option from the requested database list.
Each H2 app owns a separately named in-memory database; data resets on restart.
Recycling owns `recycling_db` in MySQL. Impact Analytics owns
`impact_analytics_db` in MongoDB.

## Structure

```text
Backend/microservices/
├── pom.xml                 # Optional build aggregator; no application here
├── mvnw / mvnw.cmd
├── compose.yaml            # Development MySQL and MongoDB
├── report/
├── collection/
├── recycling/
├── campaign/
├── reward/
├── impact-analytics/
└── notification/
```

Each service has its own `pom.xml`, Maven wrapper, and:

```text
src/
├── main/
│   ├── java/tn/esprit/eco/<service-package>/
│   │   ├── <Service>Application.java
│   │   ├── config/
│   │   ├── controller/<Service>Controller.java
│   │   ├── dto/
│   │   ├── entity/
│   │   ├── exception/
│   │   ├── mapper/
│   │   ├── repository/<Service>Repository.java
│   │   └── service/<Service>Service.java
│   └── resources/application.properties
└── test/java/tn/esprit/eco/<service-package>/
```

The controller, service, and repository starter classes have `@RestController`,
`@Service`, and `@Repository` annotations, respectively, with no methods.
Repository classes are placeholders for future data access; once domain models
exist, they can be replaced by `JpaRepository` interfaces or `MongoRepository`
interfaces for Impact Analytics. No persistence operations are implemented.
Empty packages contain `.gitkeep` files so they survive Git commits.
Future MongoDB models can use `@Document` in the Impact Analytics entity package.
No tests or domain classes have been generated. Schema generation is disabled
until entities and a schema strategy are added.

## Open in IntelliJ IDEA

1. Open `Backend/microservices/pom.xml` as a project.
2. Let IntelliJ import the seven Maven modules.
3. Set the Project SDK and Maven runner JDK to Java 17.
4. Run each service's `*Application` class separately.

Alternatively, open any service folder as an independent Maven project.
The aggregator is not the services' Maven parent; no service depends on another.

## Start development databases

From `Backend/microservices`, with Docker and Docker Compose installed:

```sh
docker compose up -d --wait
```

This starts MySQL on localhost:3307 and MongoDB on localhost:27018.
These ports match the application defaults and avoid the usual 3306/27017 ports.
The Compose credentials are local development defaults.
MySQL and MongoDB keep data in separate Docker volumes.
The H2 applications require no database installation.

If you use existing databases instead, set these environment variables in the
service's IntelliJ run configuration or shell:

| Service | Variable | Default |
| --- | --- | --- |
| Recycling | `RECYCLING_DB_URL` | `jdbc:mysql://localhost:3307/recycling_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC` |
| Recycling | `RECYCLING_DB_USERNAME` | `eco` |
| Recycling | `RECYCLING_DB_PASSWORD` | `eco_dev` |
| Impact Analytics | `IMPACT_MONGODB_URI` | `mongodb://localhost:27018/impact_analytics_db` |
| Any service | `SERVER_PORT` | Its port in the service table |

Provision `recycling_db` and the matching MySQL user before starting Recycling
when using a database outside Compose.

## Build and run

Build all applications from `Backend/microservices`:

```sh
./mvnw clean package
```

On Windows, use `mvnw.cmd clean package`.

Run one application from its own directory, for example:

```sh
cd report
./mvnw spring-boot:run
```

On Windows, use `mvnw.cmd spring-boot:run`.
Repeat in separate terminals for other services.
Recycling requires MySQL to be ready; Impact Analytics requires MongoDB for
database operations.

Swagger UI is at `http://localhost:<port>/swagger-ui.html`.
It has no business API operations yet. H2 applications also expose a development
console at `http://localhost:<port>/h2`; use the JDBC URL in that service's
`application.properties`, username `sa`, and an empty password.
With no request handler methods implemented, a request to `/` returns HTTP 404.

Stop the development databases while preserving their data:

```sh
docker compose down
```
