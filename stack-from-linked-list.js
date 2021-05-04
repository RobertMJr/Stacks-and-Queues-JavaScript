class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val) {
		const newNode = new Node(val);
		if (this.size <= 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}
	pop() {
		if (!this.first) return null;
		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		// The popped node object (temp) will still have a refrence to the next item in the stack
		// Since we are returning its value and not the node object itself, the object will never
		// be refrenced again (by a variable or as a property in another object).
		// This means that it'll get picked up by the engine's grabage collector.
		// It will never affect the stack once popped (only its value property is returned)
		// and no memory leak takes place (there is no longer a refrence to the node object)
		this.size--;
		return temp.val;
	}
}
