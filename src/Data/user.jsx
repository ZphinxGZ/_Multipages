const users = [
    {
        user: 'user',
        password: 'pass',
        role: 'admin',
        token: 'user'
    }
]

export function verifyUser(user, password){
    const userFound = users.find((u) => {
        return u.user === user && u.password === password
    })
    
    // ถ้าเจอ return user และ token แต่ถ้าไม่เจอ return null
    return userFound ? { role: userFound.role, token: userFound.token } : null
}