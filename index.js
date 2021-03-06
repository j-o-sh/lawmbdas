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
    },
    methodNotAllowed ( calledMethod ) {
      callback(null, {
        statusCode: 405,
        body: `http method ${calledMethod} is not allowed here!`
      })
    },
    serverError(error) {
      callback(null, {
        statusCode: 500,
        body: `Internal server error: ${error}`
      })
    }
  }
}
