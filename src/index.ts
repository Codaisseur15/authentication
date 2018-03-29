import { app } from './app'

const port = process.env.PORT || 4007

app.listen(port, () => console.log(`Listening on port ${port}`))

