import * as React from "react"
import Layout from "../components/layout"
import Success from "../style/sukces-style"

const Sukces = () => (
  <Layout>
    <Success>
      <Success.Container>
        <Success.Heading>Wiadomość wysłana!</Success.Heading>
        <Success.BackLink href="/">Wróć na stronę główną</Success.BackLink>
      </Success.Container>
    </Success>
  </Layout>
)

export default Sukces
