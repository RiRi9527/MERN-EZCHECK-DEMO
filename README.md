MERN-EZCHECK is a full-stack project for employee management applications

1. Things I did
   Frontend:

   - Use Vite, React, TypeScript, and TailwindCSS/ShadCN/UI to build
   - Use react-big-calendar to create an effect similar to Google Calendar using third-party libraries
   - Use react-query to handle REST API CRUD operations, manage caching, and more

   Backend:

   - Use node.js express.js build backend
   - Use CORS for security
   - Use REST API for API design.
   - Use a token for authentication - use jsonwebtoken is a library used in Node.js applications to create and verify JSON Web Tokens (JWT)
   - Use Cloudinary to handle images: upload images to the cloud and store the image URL as a string in the database
   - Use MongoDB as the database and Mongoose to connect to it

2. Probloms I sloved

   - Express.js itself does not have the capability to recognize or handle tokens/cookies. Instead, I used jsonwebtoken/cookie-parser to verify and decode tokens

   - The frontend and backend were running on different subdomains of onrender.com, and onrender.com is a public suffix,
     which means SameSite=strict cookies would be blocked. To resolve this issue, I ended up bundling the frontend and
     backend together and uploading them to render.com so that both use the same domain

   - Since the employee management app involves many time-related issues, I standardized the use of the toISOString() method to ensure all times are in UTC

   - Due to a design flaw in the database, I received the employee work schedule data like this:
     {
     "monday": {
     "checkIn": "09:00",
     "checkOut": "17:00"
     }
     }
     I know this is in EST, but it cannot be directly compared with UTC times. I need to first convert UTC to EST, then compare it with the schedule times,
     and calculate the work duration. This was not a problem in local development, but after deploying online, the server's time zone is not EST.
     Since I didn't use a third-party library for time manipulation and used simple new Date(),
     which returns the local time, I need to calculate the difference between the local time and EST, and then make the comparison."

   - Error and Floating-Point Precision: Floating-point calculations in computers may have precision issues. To reduce such errors,
     I round the result to two decimal places before converting it into hours and minutes when calculating the total hours.

3. Things I will do better:

- "I will do better by designing the database and various data types before developing the app, ensuring that the data
  between the front end and back end remains consistent. This way, I can avoid many data format conversion
