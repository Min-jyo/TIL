let todos = [];
// DOMs
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');

const render = data => {
  todos = data;
  console.log('[render]', todos);
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `
      <li id="${id}" class="todo-item">
        <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <button class="remove-todo">X</button>
      </li>`;
  });
  $todos.innerHTML = html;
};

const get = (url, f) => {
  const xhr = new XMLHttpRequest(); 
  xhr.open('GET', url); 
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      f(JSON.parse(xhr.response));
      return JSON.parse(xhr.response);
    } else {
      throw new Error(xhr.status);
    }
  };
};

const post = (url, payload, f) => {
  const xhr = new XMLHttpRequest(); 
  xhr.open('POST', url); // 여기 다름
  xhr.setRequestHeader('content-type', 'application/json') // 여기 다름
  xhr.send(JSON.stringify(payload)); // 여기 다름
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      f(JSON.parse(xhr.response)); // 여기 다름
    } else {
      throw new Error(xhr.status);
    }
  };
};

patch(`/todos/${id}`, { completed }, render);
const patch = (url, payload, f) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PATCH', url); // 여기 다름
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.send(JSON.stringify(payload)); // 여기 다름
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      f(JSON.parse(xhr.response)); // 여기 다름
    } else {
      throw new Error(xhr.status);
    }
  };
};

const del = (url, f) => {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      f(JSON.parse(xhr.response));
    } else {
      throw new Error(xhr.status);
    }
  };

};

const getTodos = () => {
  get('/todos', 0render);
  
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

window.onload = getTodos;
$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (!content || keyCode !== 13) return;
  target.value = '';
  post('/todos', { id: generateId(), content, completed: false }, render)
};

$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === + id).completed;
  patch(`/todos/${id}`, { completed }, render);
};

$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  const id = target.parentNode.id;
  del(`/todos/${id}`, render);
};