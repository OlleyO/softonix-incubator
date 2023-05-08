import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('si-refresh-token'))
  const expiresIn = ref(Number(localStorage.getItem('si-expires-in')))
  const loginTime = ref(Number(localStorage.getItem('si-login-time')))

  const authError = ref<string | null>(null)

  function setRefreshToken (token: string) {
    refreshToken.value = token
  }

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setLoginTime (time: number) {
    loginTime.value = time
    localStorage.setItem('si-login-time', time.toString())
  }

  function setExpiresIn (expIn: number) {
    loginTime.value = expIn
    localStorage.setItem('si-expires-in', expIn.toString())
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setLoginTime(new Date().getTime())
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
        setExpiresIn(res.expires_in)
      })
  }

  function register (payload: ISignupRequest) {
    return authService.register(payload)
  }

  function logout () {
    localStorage.clear()
    window.location.href = router.resolve(routeNames.login).href
  }

  function setError (errMsg: string) {
    authError.value = errMsg
  }

  return {
    accessToken,
    login,
    register,
    setRefreshToken,
    refreshToken,
    loginTime,
    expiresIn,
    setToken,
    logout,
    setError
  }
})
