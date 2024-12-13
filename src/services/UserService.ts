const users = [
  { username: "admin", password: "1234", name: "Admin User" },
  { username: "johndoe", password: "abcd", name: "John Doe" },
];

export const loginUser = (username: string, password: string) => {
  return users.find(
    (user) => user.username === username && user.password === password
  );
};

export const registerUser = (username: string, password: string, name: string) => {
  if (users.find((user) => user.username === username)) {
    return { success: false, message: "Usuário já cadastrado." };
  }

  users.push({ username, password, name });
  return { success: true, message: "Usuário cadastrado com sucesso." };
};
