import Head from 'next/head'

const Titulo = (props) => {
  return (
    <Head>
      <title>{props.children}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
    </Head>
  )
}

export default Titulo