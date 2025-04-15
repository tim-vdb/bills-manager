// Example backend validation
// if (!email || !password || !name) {
//     return res.status(422).json({ message: "Missing required fields" });
// }

// // Ensure email is unique
// const existingUser = await prisma.user.findUnique({ where: { email } });
// if (existingUser) {
//     return res.status(422).json({ message: "Email already in use" });
// }

// // Create the user
// const user = await prisma.user.create({
//     data: { email, password, name },
// });