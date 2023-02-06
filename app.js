const output = document.querySelector(".output");
const txtContainer = document.createElement("textarea");
document.body.append(txtContainer);

const val = "hello world";

let html = "Hello " + val + "\n World's";
html = "Hello " + val + ' "World"';
html = `Hello
 ${4 + 4} ${val}
      "World's"`;
output.textContent = html;
txtContainer.textContent = html;
console.log(html);
