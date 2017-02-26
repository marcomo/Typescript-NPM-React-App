export function updateGreeting(greeting: string) {
  return {
    type: 'UPDATE_GREETING',
    greeting
  }
}