import {Employees}  from "../../models/admin/employee";

export const listEmployee = async (req, res) => {
    let results = await Employees.find();
    res.render('/admin/listEmployee', { listEmployee: results }); // x <-- y
}

export const getAddEmployee = async (req, res) => {
    res.render('addEmployee.ejs'); // x <-- y
}

export const addEmployee = async (req, res) => {
    let code = req.body.code;
    let name = req.body.name;
    let age = req.body.age;
    let salary = req.body.salary;
    let branch = req.body.branch;

    console.log('>>> check req.body', req.body);

    await Employees.create(
        {
            code: code,
            name: name,
            age: age,
            salary: salary,
            branch: branch
        }
    )

    res.redirect('/')
}

export const getUpdatePage = async (req, res) => {
    const emplooyeeId = req.params.id;
    let results = await Employees.findById(emplooyeeId).exec();
    res.render('update.ejs', { itemUpdate: results }); // x <-- y
}

export const postEmployee = async (req, res) => {
    let code = req.params.code;
    let name = req.body.name;
    let age = req.body.age;
    let salary = req.body.salary;
    let branch = req.body.branch;
    let employeeID =  req.params.id;
    await Employees.updateOne({_id: employeeID}, {code: code, name: name, salary: salary, branch: branch});
    res.redirect('/')
}

export const deleteEmployee = async (req, res) => {
    let emplooyeeId = req.params.id;
    await Employees.deleteOne({_id: emplooyeeId});
    res.redirect('/');
}
