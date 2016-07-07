
# FitomoUserGeneration

## Table of Contents

1. [Getting started](#getting-started)
  1. [Clone the latest version](#1-clone-the-latest-version)
  2. [Install dependencies](#2-install-dependencies)
  3. [Define Enviormental Variables](#3-define-environmental-variables)
  4. [Run the application](#4-run-the-application)
2. [Tech Stack](#tech-stack)
3. [Directory Layout](#directory-layout)
4. [Contributing](#contributing)
5. [License](#license)

## What it does
Creates several functions to query graph database Neo4j for 'friends of friends' relationships.

## Getting started

#### 1. Clone the latest version

  Start by cloning the latest version of the Fitomo/Fitomo-User-Generation and on your local machine by running:

  ```sh
  $ git clone https://github.com/Fitomo/Friends-Graph.git
  $ cd Friends-Graph
  ```

#### 2. Install Dependencies
  From within the root directory run the following command to install all dependencies:

  ```sh
  $ npm install
  ```
#### 3. Define Environmental Variables
  Define the environmental variable DB_URL to equal the URL of the neo4j DB
#### 4. Run the application
  
  ```sh
  $ npm start
  ```
  Access the application at the host's port 5000

## Tech Stack

##### Back End:
- Node
- Express
#### Database:
- Neo4j

## Directory Layout
```

├── /node_modules/              # 3rd-party libraries and utilities
├── /server/                    # Server source code
│   ├── /controllers/           # Manage API calls and request handling
│   ├── /db/                    # Database relate functions
│   ├── /routes/                # Handle all routing
│   ├── /server.js              # Core server file
├── /testData/                  # Test data related to users/friends
├── Dockerfile                  # Docker configuration
├── package.json                # List of 3rd party libraries and utilities to be installed
```

## Contributing

  1. Fork the repo.
  2. Clone it to your local computer
  3. Cut a namespaced feature branch from master and name it appropriately
  4. Make commits and prefix each commit with the type of work you were doing
  5. BEFORE PUSHING UP YOUR CHANGES, rebase upstream changes into your branch, fix any potential conflicts, and then push to your fork.
  6. Submit a pull request directly to the master
  7. Someone else will perform code review to keep codebase clean
  8. Fix any errors or issues raised by the reviewer and push the fixes as a single new commit
  9. Repeat until the pull request is merged.

## License

M.I.T
