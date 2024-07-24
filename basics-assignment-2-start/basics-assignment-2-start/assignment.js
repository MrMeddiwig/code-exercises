const task3Element = document.getElementById('task-3');

task3Element.addEventListener('click', alertText);

function alertText() {
    alert('Jellybeans');
}

function alertName(name) {
    alert(name);
}

function combineStrings(string1, string2, string3) {
    return string1 + ' ' + string2 + ' ' + string3;
}

alert(combineStrings('Jellybeans', 'are', 'yummy'));

