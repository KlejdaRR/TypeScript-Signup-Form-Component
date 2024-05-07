Signup Form Component

This project demonstrates a signup form component built using React with TypeScript. The component follows several best practices to ensure code readability, maintainability, and user experience. Below are the key best practices employed in this project:

Key Best Practices:
1. Functional Components and Hooks:
The signup form component is implemented as a functional component, leveraging React Hooks like useState for managing component state.
2. TypeScript Type Definitions:
Type safety is enforced using TypeScript interfaces (SignUpData) to define the structure of form data, enhancing code readability and reducing runtime errors.
3. Separation of Concerns:
The component is divided into smaller, reusable components (TextInput, SelectInput) for input fields and select dropdowns, promoting code reusability and maintainability. Maintaining separation of concerns by keeping the form state management logic in a separate file, while the SignUpForm component focuses only on rendering the form elements and handling form submission.
4. Asynchronous Form Submission:
Form submission is handled asynchronously using axios, ensuring a smooth user experience and proper error handling.
5. Event Handling:
Event handlers (handleChange, handleSelectChange, and handleSubmit) are defined to manage user interactions. These handlers are passed to the respective form elements (input fields and select) to update the form data state (formData) as users input data or make selections. 
6. Accessibility:
Accessibility features such as appropriate aria-label attributes are added to form elements to ensure compatibility with assistive technologies, improving usability for all users.
7. Clear and Concise Code:
The codebase is organized and well-commented, adhering to best practices for readability and maintainability.
