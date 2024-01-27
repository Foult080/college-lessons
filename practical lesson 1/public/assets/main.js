/**
 * Приветствие пользователя
 */
async function sayHello() {
  const input = document.getElementById('user-name');
  const userName = input.value;
  const request = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name: userName }),
  });
  const result = await request.json();
  alert(result.msg);
}
