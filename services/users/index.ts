import headers from "next/headers";

const { users } = await import('@/data/users');
export async function getUserByCookiesUsername() {
  
  const cookiesInstance = await headers.cookies();

  const username = cookiesInstance.get('username');
  
  if (username) { 
    return users.find(user => user.username === username.value)
  }
}