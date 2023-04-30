export const StringUtils = {
  removeNonWords (str: string) {
    return str.replace(/\W+/, '')
  }
}
