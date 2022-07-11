
let name=prompt("Ваше имя?","")
alert('Hello '+name);

let arr = [1,2,3,4]
let arr2 = [1,2,3,45]
if (arr.length>arr2.length){
        console.log("arr>arr2")
}else if (arr.length<arr2.length){
        console.log("arr<arr2")
}else {
        console.log("===")
}

let color = prompt('Введите цвет на английском')

switch (color) {
        case "green":
                console.log('можешь переходить дорогу')
        break;
        case "yellow":
                console.log('горит желтый подожди')
        break;
        case  "red":
                console.log('горит красный переходить нельзя')
        break;
        default:
                console.log('цвет не найден')
        break;
}