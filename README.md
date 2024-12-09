# Subform

Create and submit forms with a clean and minimal UI.

## Features

- Create custom forms with multiple input types (Short Answer, Long Answer, Single Select, URL, Number)
- Drag and drop functionality to reorder questions
- Save forms as drafts
- Preview forms before publishing
- Form completion progress tracking
- Responsive design for all screen sizes

## Assumptions

1. Using local storage to save draft & published forms, and submitted form responses separately.
2. Displaying alert messages for validation errors, missing form names, and other edge cases.
3. Using Peerlist icons from the Figma file with some design restrictions.
4. Input type 'Number' is implemented instead of 'Date' based on the assignment documentation, despite discrepancies with the Figma design.
5. New input blocks are added sequentially below existing blocks and above the 'Add Question' button.
6. Preview, Save as Draft, and Publish Form buttons are enabled once at least one question block is added.
7. Font sizes, spacing, and component dimensions are custom for responsive design on smaller devices.
8. Preview button transforms into a Back button when navigating to the /preview page for better UX.

## Tech Stack

- Next.js 14
- JavaScript
- React 18
- TailwindCSS
- Motion.dev (for animations)
