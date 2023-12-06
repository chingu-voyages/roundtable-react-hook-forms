const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export function EmailValidator(email: string): boolean {
     return expression.test(email)
}
