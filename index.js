

axios.get("https://api.vschool.io/pokemon")
    .then(response => {
        console.log(response.data.objects[0].pokemon);
        const list = response.data.objects[0].pokemon;
        for (let i = 0; i < list.length; i++) {
           let listItem = document.createElement('li');
           listItem.textContent = list[i].name;
           document.body.appendChild(listItem); 
        }
    })