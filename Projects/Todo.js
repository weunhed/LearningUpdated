
let input = prompt('what would you like to do');
const todos = ['Collect Chicken Eggs', 'Clean Cat Litter Box'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("****************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("****************")
    } else if (input === 'new') {
        const newTodo = prompt('Ok what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const indexStr = prompt('ok, enter an index to delete');
        const index = parseInt(indexStr);
        if (Number.isNaN(index)) {
            console.log('Unknown Index');
        } else {
            if (index >= 0 && index < todos.length) {
                const deleted = todos.splice(index, 1);
                console.log(`OK deleted ${deleted[0]}`);
            } else {
                console.log('Index out of range');
            }
        }
    } else {
        console.log('Unknown command');
    }
    input = prompt('what would you like to do');
}

console.log("OK, YOU QUIT THE APP");