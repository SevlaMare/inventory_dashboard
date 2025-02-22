export function isEmailValid(email: string) {
  if (email === null || email === undefined) {
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function isPasswordValid(password: string) {
  if (password === null || password === undefined) {
    return false;
  }
  if (password.length === 0) {
    return false;
  }
  const passwordRegex = /^[a-zA-Z0-9]{6}$/;
  return passwordRegex.test(password);
}
