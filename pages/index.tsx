import Head from "next/head";
import Script from "next/script";
import Dashboard from "../components/Dashboard/Dashboard";

const index = () => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDDW3LH9');`,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ERXN8577ZB"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-ERXN8577ZB');
        `}
      </Script>
      <Head>
        <meta
          name="description"
          content="A responsive and visually appealing admin dashboard UI for the fictional financial company, FinFiesta, utilizing Figma, Next.js, SASS/SCSS, Redux, and Recharts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
};

export default index;
