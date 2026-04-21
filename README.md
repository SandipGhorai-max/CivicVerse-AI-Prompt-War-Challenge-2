# CivicVerse AI – The Interactive Democracy Engine

CivicVerse AI is a scalable, secure, and highly interactive AI assistant that transforms the election process into a personalized, story-driven, and simulation-based experience.

## Features

- **Modular Architecture**: User Profiling, Election Knowledge, Simulation, and Timeline Engines.
- **Experience Layers**: Story Mode, Smart Timelines, Civic Journey Map.
- **Misinformation Shield**: Fact-check logic to neutralize election myths.
- **Universal Accessibility**: "Explain Like I'm 15" mode, Low-bandwidth toggle, and Text-to-Speech interaction.
- **Google Integration**: Mock connections prepared for Google Maps, Vertex AI, and Firebase.

## Getting Started

Because CivicVerse AI is built strictly using Vanilla JavaScript, HTML, and CSS (to ensure maximum efficiency and an uncompromising performance score), there is no heavy build process required.

### 1. Installation
Install the required local server dependencies:
```bash
npm install
```

### 2. Testing
Run the logic test suite via Node.js to verify module computations (XP, Paths, and Shield validation):
```bash
npm run test
```

### 3. Serving Locally
To view the web application locally:
```bash
npm start
```
*This will serve the static files on `http://localhost:3000`.*

## Modifying Roles
To add new experiences or narratives, modify the `roles` object in `app.js`. The SimulationEngine will dynamically generate UI options based on this configuration.
