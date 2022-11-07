export const HandleError = (error) => {
    switch (error.code) {
        case 'auth/invalid-email':
            return 'Correo no válido';
        case 'auth/email-already-in-use':
            return 'El correo ya está registrado';
        case 'auth/wrong-password':
            return 'Contraseña incorrecta';
        case 'auth/user-not-found':
            return 'El usuario no existe';
        default:
            return 'Error desconocido';
    }
}
