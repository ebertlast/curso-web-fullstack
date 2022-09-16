let getUsers = () => {

  let btnLeerUsuarios = document.getElementById("btnLeerUsuarios");
  let loader = document.getElementById("loader");

  btnLeerUsuarios.disabled = true;
  loader.style.display = "block";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json()
    })
    .then(data => {

      // Rellenar Usuarios
      users.splice(0, users.length, ...data);

      // Pintar Usuarios en la tabla
      renderUsers();

    }).then(() => {
      btnLeerUsuarios.disabled = false;
      loader.style.display = "none";
    })
}

let renderUsers = () => {
  clearUserTable();

  // Identificar Tabla
  let table = document.getElementById("tableUsers");

  users.forEach(user => {
    // Agregar nueva fila
    let row = table.insertRow(-1);

    // Agregar celdas
    let cellId = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellUsername = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellPhone = row.insertCell(4);
    let cellWebsite = row.insertCell(5);
    let cellCompany = row.insertCell(6);
    let cellAddress = row.insertCell(7);
    let cellPosts = row.insertCell(8);

    // Agregar contenido a las celdas
    cellId.innerHTML = user.id;
    cellName.innerHTML = user.name;
    cellUsername.innerHTML = user.username;
    cellEmail.innerHTML = user.email;
    cellPhone.innerHTML = user.phone;
    cellWebsite.innerHTML = "<a target='_blank' href='" + user.website + "'>" + user.website + "</a>";

    cellCompany.innerHTML = `<span class="link" onclick="viewCompany(${user.id})">${user.company.name}</span>`;

    cellAddress.innerHTML = `<span class="link" onclick="viewAddress(${user.id})">${user.address.city}</span>`;

    cellPosts.innerHTML = `<span class="link" onclick="viewPosts(${user.id})">Posts</span>`;

  });

}

let viewCompany = (userid) => {
  if (!userid || userid < 1) return;

  let user = users.find(user => user.id == userid);
  if (!user) return;

  let company = user.company;
  alert(`Company: ${company.name} \n Catch Phrase: ${company.catchPhrase} \n BS: ${company.bs}`);
}

let viewAddress = (userid) => {
  if (!userid || userid < 1) return;

  let user = users.find(user => user.id == userid);
  if (!user) return;

  let address = user.address;
  alert(`Address: ${address.street} \n Street: ${address.street} \n Suite: ${address.suite} \n City: ${address.city} \n Zipcode: ${address.zipcode}`);
}

let clearUserTable = () => {
  if(users.length < 1) return;
  let table = document.getElementById("tableUsers");
  let i = 0;
  let trs = table.querySelectorAll("tr")

  if(trs.length <= 1) return;
  
  for (i = 1; i < trs.length; i++) {
    tr = trs[i];
    tr.remove();
  }
}

