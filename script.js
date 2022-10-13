const input = document.querySelector("input");
const body = document.querySelector("body");

const toggleThemeMode = () => {
  body.classList.toggle("dark");
};

input.onchange = toggleThemeMode;


// function changeTheme() {
//     document.body.classList.toggle("dark")
// }