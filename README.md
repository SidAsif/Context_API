
# Context API with React: Basic Counter Example

This repository demonstrates how to use the Context API in React with a basic counter example. The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your machine.

### Usage
The example provided in this project demonstrates a simple counter application using the Context API.

How it works:

1-Counter Context: The CounterContext.js file creates a CounterContext with its initial state and actions to increment and decrement the counter value.

2-Counter Provider: The CounterProvider component wraps the root of the application and provides the CounterContext to all its children.

3-Counter Component: The Counter component consumes the CounterContext using the useContext hook and displays the counter value. It also provides buttons to increment and decrement the counter value.

### Directory Structures

  ```bash
context-api-counter/
│
├── src/
│   ├── components/
│   │   └── Counter.js
│   ├── contexts/
│   │   └── CounterContext.js
│   ├── App.js
│   └── index.js
│
├── public/
│   └── index.html
│
├── package.json
├── README.md
└── ...

