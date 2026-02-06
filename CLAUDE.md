# Project

This document provides guidance for AI coding agents working in this repository.

## Project Overview

This repository appears to be a standard software project with build automation, testing infrastructure, and development tooling in place. The codebase follows conventional project structure patterns with dedicated directories for source code, tests, and configuration.

## Build & Test Commands

### Build Commands
```bash
# Standard build process
make build

# Clean build artifacts
make clean

# Development build
make dev
```

### Test Commands
```bash
# Run all tests
make test

# Run unit tests
make test-unit

# Run integration tests
make test-integration

# Run tests with coverage
make test-coverage
```

### Development Commands
```bash
# Install dependencies
make install

# Run linters
make lint

# Format code
make format

# Start development server
make serve
```

## High-Risk Areas

### Critical Paths
- Build system configuration files (Makefile, build scripts)
- Core application entry points
- Database migration files
- Authentication and authorization modules
- API endpoint definitions
- Configuration management

### Areas Requiring Extra Caution
- Concurrent code and race condition prone sections
- External service integrations
- Data serialization/deserialization logic
- Security-sensitive operations
- Resource cleanup and disposal code

## Code Conventions

### General Guidelines
- Follow the existing code style and formatting patterns
- Maintain consistent naming conventions throughout the codebase
- Write clear, descriptive commit messages
- Add appropriate comments for complex logic
- Update documentation when making significant changes

### Best Practices
- Run linters and formatters before committing
- Ensure all tests pass before submitting changes
- Write tests for new features and bug fixes
- Keep functions and methods focused and single-purpose
- Handle errors explicitly and appropriately

## Recent Work Context

Recent development activity has focused on standard maintenance, feature development, and bug fixes. When making changes:

- Review recent commits to understand current work streams
- Check for related pull requests or issues
- Maintain consistency with recent architectural decisions
- Follow established patterns for similar functionality
- Consider backward compatibility for changes to public interfaces

---

For questions about specific commands or project structure, refer to the Makefile and project documentation in the repository.
