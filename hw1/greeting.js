
        var name=prompt("Ваше имя?","")
        var age =prompt('age?',18);

        alert('Hello'+name);


        const equals = (a, b) =>
        a.length === b.length &&
        a.every((v, i) => v === b[i]);

        const a = [1, 2, 3];
        const b = [1, 2, 3];
        const str = 'a';
        const strObj = new String('a');

        equals(a, b); // true
        equals([str], [strObj]); // false
        equals([null], [undefined]); // false


        const colorList = [
  {name: 'yellow', interval: 500},
  {name: 'red', interval: 4000},
  {name: 'yellow', interval: 500},
  {name: 'green', interval: 4000}
];

let count = 0;

function changeColor() {
  if (count === colorList.length) {
    count = 0;
  }
  console.log(colorList[count].name)
  setTimeout(changeColor, colorList[count].interval)
  count = count + 1;
}

changeColor()

        // const letters = ['a','b','c']
        // const index = letters.indexOf('b')
        //
        // const letters =  [
        //         {
        //                 letter: 'a'
        //         },
        //         {
        //                 letter: 'b'
        //         },
        //         {
        //                 letter: 'c'
        //         }
        // ]
        // const index = letters.indexOf({letter: 'b'})