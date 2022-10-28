import bcrypt from 'bcryptjs'

const users =[
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456, 10'),
    isAdmin: true
  },{
    name: 'Valeria',
    email: 'valeria@example.com',
    password: bcrypt.hashSync('123456, 10'),
  },
  {
    name: 'Vladimir',
    email: 'vladimir@example.com',
    password: bcrypt.hashSync('123456, 10'),
  },
]
export default users