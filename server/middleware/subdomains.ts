export default defineEventHandler(({ req, res, context }) => {
  const hostname = req.headers.host || "cakadi.id"

  const mainDomain = ["localhost:3000", "cakadi.id"]

  if (!mainDomain.includes(hostname)) {
    const currentHost =
      process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
        ? hostname.replace(`.cakadi.id`, "")
        : hostname.replace(`.localhost:3000`, "")

    context.subdomain = currentHost
  }
})