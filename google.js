var yearselect= document.getElementById("nam")
console.log(document.getElementById("nam"))
for (let index = 1920; index < 2021; index++) {
    var option=document.createElement("option")
    option.value = index
    option.innerHTML = index
    yearselect.append(option)
}