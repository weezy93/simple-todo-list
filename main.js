
var todo = function(attributes){
	this.id = attributes.id;
	this.task= attributes.task,
	this.completed= false
}

// todoList
var todoList = function(){
 this.todoArray = []
}

todoList.prototype.addTask= function(todo){
	this.todoArray.push(todo);
}

todoList.prototype.completeTask = function(todo){
	var index = this.todoArray.indexOf(todo);

	this.todoArray.splice(index, 1);
	todo.completed = true;
	console.log(myTodos.todoArray);
}



var myTodos = new todoList();
