# AI Studio Application Rules

This document outlines the technical stack and guidelines for developing this React e-commerce application.

## Tech Stack

*   **React**: The core library for building the user interface.
*   **TypeScript**: Used for type safety across the entire codebase, enhancing maintainability and reducing errors.
*   **Tailwind CSS**: A utility-first CSS framework for rapid and consistent styling, ensuring responsive designs.
*   **React Router Dom**: Handles client-side routing, enabling navigation between different pages without full page reloads.
*   **Vite**: The build tool providing a fast development server and optimized production builds.
*   **React Context API**: Utilized for global state management, such as the shopping cart.
*   **Local Storage**: Used for persisting user-specific data like the shopping cart contents across sessions.
*   **shadcn/ui & Radix UI**: A collection of accessible and customizable UI components built on Radix UI primitives, providing a consistent look and feel.
*   **Lucide-React**: A library for easily integrating vector icons into the application.

## Library Usage Rules

To maintain consistency and efficiency, please adhere to the following guidelines when developing:

*   **UI Components**:
    *   **Prioritize shadcn/ui**: Always try to use components from the `shadcn/ui` library for common UI elements (e.g., buttons, forms, cards).
    *   **Custom Components**: If a specific `shadcn/ui` component does not exist or requires significant deviation from its intended design, create a new, small, and focused custom React component.
    *   **No Direct shadcn/ui Edits**: Do NOT modify the source files of `shadcn/ui` components. If customization is needed, wrap them in your own components or pass props.
*   **Styling**:
    *   **Tailwind CSS Only**: All styling must be implemented using Tailwind CSS utility classes. Avoid writing custom CSS files or inline styles unless absolutely necessary for global overrides (e.g., `index.css`).
    *   **Responsiveness**: Ensure all components and layouts are fully responsive across different screen sizes using Tailwind's responsive utilities.
*   **Routing**:
    *   **React Router Dom**: Use `react-router-dom` for all navigation within the application.
    *   **Route Definition**: Keep the main application routes defined in `src/App.tsx`.
*   **State Management**:
    *   **Global State**: For application-wide state (like the shopping cart), use the React Context API.
    *   **Local State**: For component-specific state, use React's `useState` or `useReducer` hooks.
*   **Icons**:
    *   **Lucide-React**: Use icons from the `lucide-react` package for all icon needs.
*   **Project Structure**:
    *   **Root Directory**: All source code resides in the `src/` directory.
    *   **Pages**: Application pages should be placed in `src/pages/`.
    *   **Components**: Reusable UI components should be placed in `src/components/`.
    *   **Hooks**: Custom React hooks should be placed in `src/hooks/`.
    *   **Contexts**: React Context definitions should be placed in `src/contexts/`.
    *   **Services**: Data fetching or business logic services should be placed in `src/services/`.
    *   **Utilities**: General utility functions should be placed in `src/utils/`.
    *   **Naming Conventions**: Directory names must be all lower-case. File names may use mixed-case (e.g., `ProductCard.tsx`).
*   **Error Handling**:
    *   **No Catch Blocks**: Unless explicitly requested, do not implement `try/catch` blocks for errors. Allow errors to bubble up to facilitate debugging.
*   **Toasts**:
    *   **Notifications**: Use a toast notification system (e.g., `react-hot-toast` if installed) to provide user feedback for important actions or events.