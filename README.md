## Branches Information

### Main Branch
The **main** branch represents the version of the application that has been submitted for review as part of the Front-End/Full-Stack Software Developer application at OpenHouse.AI.

### Beta Branch (New Features)
The **beta** branch contains ongoing development work, including additional features and enhancements, beyond the submitted version. Any new features or improvements will be developed and tested here.

Please refer to the **main** branch the application review process, unless interested in code fixes. If you have any questions or need specific details about the submitted version, feel free to reach out for clarification.


# OpenHouse.AI - Front End Web Development Coding Exercise
This project is a coding exercise for front-end web development, using React, TypeScript, and Vite.

## Project Setup
To set up the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/manleenmavi/openhouse-ai-exercise-fewd.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Project Structure
The project root folder contains the following elements:

- public: Static files directory
- src: Main source folder housing essential project components and files
- assets: Assets including images, fonts, etc.
- components: React components
- styles: CSS modules
- types: TypeScript interfaces and types
- Other essential project files

## Features
Following are the main features.

1. Application retrieves data from the provided RESTful endpoints and displays it to the user.
2. Data includes community groups and the houses in there group. Image is also displayed along the community.
3. Sorts the data alphabetically.
4. Shows the average house prices within each community.
5. Filters out invalid data.
6. Provides a simple and responsive web interface.

## Technologies
The project is built using:

- VITE v5.0.10: Utilizing React framework for enhanced frontend performance.
- React: Utilized within Vite for the frontend.
- TypeScript: Utilized for improved type safety and development experience.

## Deployment

### Minimum Requirements

Ensure you have Node.js version 18 or higher installed.

### Building the Project
To build the project:

1. Install dependencies: `npm install`
2. Build: `npm run build`

This will generate a dist directory containing the built project.

### Running on Local System

To run the project on a local machine:

Execute `npm run preview`

## Proxy
The project uses a proxy to resolve CORS issues with the provided Google APIs.
Endpoints used:

1. https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json
2. https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json 


## Future Improvements

If provided with additional time, there are several enhancements and improvements I'd consider implementing to further enhance the quality and functionality of the application:

1. Error Handling: Develop a stronger error-handling system to offer clearer guidance during network failures or invalid data scenarios.

2. Performance Optimization: Optimize loading times, especially when dealing with large datasets or intricate UI components like images, through thorough performance profiling.

3. Test Coverage: Expand test coverage by including more unit, integration, and end-to-end tests to bolster code reliability and prevent regressions.

4. UI/UX Refinement: Enhance the user interface focusing on intuitive design and improved user interactions.

5. Details: Would implement to more details about each community.


## Additional Comments
For further updates or changes, refer to the 'beta' branch of this repository.

