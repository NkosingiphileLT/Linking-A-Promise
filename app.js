//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
const emailRef = document.querySelector(".Mail");

async function main() {
const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
const data = await response.json()
console.log(data)
emailRef.innerHTML = data.email
}

main()