---
applyTo: '**/api/**,**/services/**,**/models/**,**/controllers/**,**/middlewares/**'
---

# Backend Development Standards

## API Design

- Follow RESTful principles with proper HTTP methods
- Use consistent naming conventions for endpoints
- Implement proper status codes and error responses
- Version APIs using URL versioning (/api/v1/)
- Document APIs with OpenAPI/Swagger specifications

## Database

- Use database migrations for schema changes
- Implement proper indexing for query performance
- Use connection pooling for database connections
- Follow database normalization principles
- Implement soft deletes for data retention

## Security

- Implement authentication and authorization middleware
- Use HTTPS for all communications
- Validate and sanitize all inputs
- Implement rate limiting and request throttling
- Use environment variables for sensitive configuration

## Error Handling

- Create custom exception classes for different error types
- Implement global error handling middleware
- Log errors with correlation IDs for tracing
- Return consistent error response formats
- Use circuit breakers for external service calls

## Testing

- Write unit tests for business logic
- Implement integration tests for database operations
- Mock external dependencies in tests
- Test error scenarios and edge cases
- Maintain test coverage above 85% for core services

## Performance

- Implement caching strategies (Redis, in-memory)
- Use async/await for I/O operations
- Optimize database queries and avoid N+1 problems
- Implement pagination for large data sets
- Use background jobs for long-running tasks
