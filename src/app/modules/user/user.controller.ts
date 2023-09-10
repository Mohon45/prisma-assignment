import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import { default as userService, default as userservice } from "./user.service"
const getalluser = catchAsync(async (req: Request, res: Response) => {

  const result = await userservice.getallUser()
  res.send({
    success: true,
    statusCode: 200,
    message: 'Users retrieved  successfully',
    data: result,
  })
})

// getsingle 
const getsingleuser = catchAsync(async (req: Request, res: Response) => {
  const result = await userservice.getSingleUser(req.params.id)
  res.send({
    success: true,
    statusCode: 200,
    message: 'User retrieved  successfully',
    data: result,
  })
})

// update
const updateuser = catchAsync(async (req: Request, res: Response) => {
  const result = await userservice.updateUser(req.params.id, req.body)
  res.send({
    success: true,
    statusCode: 200,
    message: 'User updated   successfully',
    data: result,
  })
})

const deleteuser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.deleteUser(req.params.id)
  res.send({
    success: true,
    statusCode: 200,
    message: 'User deleted   successfully',
    data: result,
  })
})
  const usercontroller ={
  getalluser,
  getsingleuser,
  updateuser,
  deleteuser
  }
  export default usercontroller