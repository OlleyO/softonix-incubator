export const trimmedNoNonWordLocaleLowerCasedString = (str: string) => str.trim().split(/\W+/).join('').toLocaleLowerCase()
