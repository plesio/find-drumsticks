import { AppProps } from '$fresh/server.ts';
import { asset, Head } from '$fresh/runtime.ts';

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href={asset('style.css')} />
        <title>find-drumsticks</title>
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
