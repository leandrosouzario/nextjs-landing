function safeRedirect(path) {
  if (path && path.startsWith('/') && !path.startsWith('//')) {
    return path
  }

  return '/'
}

export function getAuthRedirectUrl(next) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL is not configured')
  }

  const callbackUrl = `${siteUrl.replace(/\/$/, '')}/auth/callback`
  const redirectPath = safeRedirect(next)

  if (redirectPath === '/') {
    return callbackUrl
  }

  return `${callbackUrl}?next=${encodeURIComponent(redirectPath)}`
}

export { safeRedirect }
