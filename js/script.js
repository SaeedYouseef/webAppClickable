let head = document.createElement('h1');
head.textContent ='الأذكار المطلقة';
document.body.appendChild(head);
let myQoutes =  [
            'سبحان الله',
            'الحمد لله',
            'الله أكبر',
            'لا حول ولا قوة إلا بالله',
            'لا إله إلا الله',
            ''
        ];;
let myDash = document.createElement('div');
document.body.appendChild(myDash);

let qoute = document.createElement('h2');
myDash.appendChild(qoute);
let preI=0;
qoute.textContent = myQoutes[preI];
let counter=0;
let myButton = document.createElement('button');
myButton.textContent =' ذكر آخر';
myDash.appendChild(myButton);
myButton.addEventListener('click', function () {
    do {
        newIndex = Math.floor(Math.random() * (myQoutes.length-1)+0);
    } while (newIndex === preI);
    qoute.textContent = myQoutes[newIndex];console.log(newIndex);
    preI = newIndex;
    counter++
    myButton.textContent = ' ذكر آخر' +'  '+counter;
    
});
