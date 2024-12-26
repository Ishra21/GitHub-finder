export const searchUsers = async (name) =>{
    const response = await fetch(`https://api.github.com/search/users?q=${name}`)
    const data = response.json()
    // console.log(data)
    return data
}


export const fetchUser = async (login) =>{

const response = await fetch(`https://api.github.com/users/${login}`)
const data = await response.json()
// console.log(data)
return data;

}