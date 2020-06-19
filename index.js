export default function (callback) {
  return {
    redirect ({ to }) {
      callback(null, {
        statusCode: 301,
        headers: {
          Location: to
        },
        body: ''
      })
    }
  }
}
