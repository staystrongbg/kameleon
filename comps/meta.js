import Head from 'next/head';
const Meta = ({ title, keyword, description }) => {
  return (
    <Head>
      <meta name='keywords' content={keyword} />
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'K A M E L E O N 2021',
  description: 'Sala i Ketering',
  keyword: 'sala, ketering, kameleon, beograd, proslave, ketering za firme',
};
export default Meta;
