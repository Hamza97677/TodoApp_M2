import inquirer from "inquirer";

let todos : string[] =[];

async function createtodo(todos : string[]){
    do{
        let answer = await inquirer.prompt({

            type : "list",
            message : "select an operation",
            name : "selecttodo",
            choices : ["Add","update","view","delete"]
        })
            
            if(answer.selecttodo == "Add"){
                    let taskadd = await inquirer.prompt({
                        type : "input",
                        message : "Add item in the list: ",
                        name : "addselecttodo",
                    })
                        todos.push(taskadd.addselecttodo)
                        todos.forEach(todo => console.log(todo))
            }
    
            if(answer.selecttodo == "update"){
                
                let updatetodo = await inquirer.prompt({
                    type : "list",
                    message : "update item in the list",               //add //update // new array
                    name : "updatselecttodo",
                    choices : todos.map(item => item)
                });
                let taskadd = await inquirer.prompt({
                    type : "input",
                    message : "Add item in the list: ",
                    name : "addselecttodo",
                })
    
                    let newtodos = todos.filter(val => val !== updatetodo.updatselecttodo)
                    todos = [...newtodos,taskadd.addselecttodo];
                    todos.forEach(todo => console.log(todo))
            }
    
            if(answer.selecttodo == "view"){
                console.log("*******Todos List********")
                todos.forEach(todo => console.log(todo))
    
            }
    
            if(answer.selecttodo == "delete"){
                let deletetodo = await inquirer.prompt({
                    type : "list",
                    message : "update item in the list",               
                    name : "deleteselecttodo",
                    choices : todos.map(item => item)
                });
                let newtodoss = todos.filter(val => val !== deletetodo.deleteselecttodo)
                    todos = [...newtodoss];
                    todos.forEach(todo => console.log(todo))
            }      

    } while(true)
      
    
}

createtodo(todos);
 