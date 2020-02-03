import axios from 'axios'

export const signUp = async credentials => {
    console.log('this is for the signUp!!!!!!!', credentials)
  try {
    const resp = await axios.post('http://localhost:3000/users/register', credentials)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const signInUser = async credentials => {
    console.log('this is for the signInUser')
  try {
    const resp = await axios.post('http://localhost:3000/users/login', credentials)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const signOut = async user => {
  try {
    await localStorage.clear()
    return true
  } catch (error) {
    throw error
  }
}

// export const changePassword = async (passwords, user) => {
//   try {
//     const resp = await axios.post('http://localhost:3000')
//     return resp.data
//   } catch (error) {
//     throw error
//   }
// }


export default signInUser 
