export function getCookieOptions() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? ''

  if (siteUrl.includes('leandrosouza.info')) {
    return {
      domain: '.leandrosouza.info',
      path: '/',
      sameSite: 'lax',
      secure: true,
    }
  }

  return {
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  }
}
