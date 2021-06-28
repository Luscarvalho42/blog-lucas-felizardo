import Head from 'next/head'

const Titulo = (props) => {
  return (
    <Head>
      <title>{props.children}</title>
    </Head>
  )
}

export default Titulo