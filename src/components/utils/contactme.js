// const apiV1='https://script.google.com/macros/s/AKfycbwEZWq95IL20CuGeZ_-Mp1op_MH6D3y30QSem4uR9NCyNXQ6XvG56H05ErxyYz01Zp5/exec'

// const caction = async (prev, formData) => {

//     const api = apiV1;
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const message = formData.get('message');
    
//     if (!name || !email || !message) {
//         return "All fields are required";
//     }

//     try {
//         const response = await fetch(api, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             mode:'no-cors',
//             body: JSON.stringify({ 
//                 name, 
//                 email, 
//                 message,
//                 timestamp: new Date().toISOString()
//             })
//         });
// console.log(response)
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.text();
//         console.log('Success:', result);
//         return "Message sent successfully!";
//     } catch (error) {
//         console.error('Error:', error);
//         return "I will back soon";
//     }
// };

// export default caction;