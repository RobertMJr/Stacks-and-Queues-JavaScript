const stack = [];
stack.push('google');
stack.push('instagram');
stack.push('youtube');
console.log(stack.pop());

// Not so efficient as when adding & removing to/from the begining we have to re-index everything in the array
const stack2 = [];
stack2.unshift('create new file');
stack2.unshift('resized file');
stack2.unshift('cloned out wrinkle');
console.log(stack2.shift());
