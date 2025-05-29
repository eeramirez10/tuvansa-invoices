


export enum Role {
  USER,
  ADMIN
}

export enum Branch {
  MEXICO,
  MONTERREY,
  VERACRUZ,
  MEXICALI,
  QUERETARO,
  CANCUN,
}

// 1. Define los tipos según la respuesta del backend



export interface User {
  id: string
  username: string
  email: string
  name: string
  lastname: string
  role: Role
  branch: string
  isActive: boolean
  createdAt: string   // vienen como ISO strings
  updatedAt: string
}



export interface LoginResponse {
  token: string
  user: User
}

export interface LoginCredentials {
  email: string
  password: string
}