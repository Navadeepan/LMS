
new Vue ({
	el: '#taskList',
	data: {
		title: 'to do list',
		tasks: [
			{ name: 'Create the task' },
			{ name: 'Read a book' },
			{ name: 'Meeting with team' }
		]
	},
	methods: {
		newItem: function() {
			if (!this.tasks.name) {
				return
			}
			this.tasks.push ( {
				name: this.tasks.name,
				del: ''
			});
      this.tasks.name = "";
		},
		delItem: function (task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}
})


// const mongoose = require('mongoose')
// const db = 'mongodb+srv://task:task@task-lms.7qm0u.mongodb.net/users?retryWrites=true&w=majority'
// mongoose.connect(db,{useNewUrlParser:true, useUnfiedTopology:true});
// 	.then((result)=>console.log(result))
// 	.catch((err)=>console.log(err))
