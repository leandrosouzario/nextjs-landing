export function getAuthRedirectUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL is not configured')
  }

  return `${siteUrl.replace(/\/$/, '')}/auth/callback`
}
