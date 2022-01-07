const notFound = (req, res) => {
  // const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  res.json({
    message: `Not Found - ${`${req.protocol}://${req.get('host')}${
      req.originalUrl
    }`}`,
  })
}

export default notFound
