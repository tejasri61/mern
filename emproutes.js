const empcon=require('./control/empControl')
const express=require('express')
routes.post('/add-emp',empcon.insertEmp)
module.exports=routes
