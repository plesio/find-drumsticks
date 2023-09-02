import { AllSticks } from '../utils/if.ts';

export default function AboutModal() {
  const stickcount = AllSticks.length;

  return (
    <>
      <div id='modal_about' class='hidden target:block'>
        <div class='block  w-full h-full bg-black/70 fixed top-0 left-0 overflow-y-auto'>
          <a href='#' class='block w-full h-full cursor-default'></a>

          <div class='xs:max-w-xs md:w-full mx-auto lg:w-3/4 xs:p-4 md:px-4 lg:px-auto md:my-4 lg:my-10 relative -top-full'>
            <div class='bg-white rounded-lg shadow-lg'>
              <div class='absolute top-2 right-1/2'>
                <button type='button' class='' aria-label='Close'>
                  <a href='#' class='block w-full h-full cursor-default'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </a>
                </button>
              </div>
              <div class='p-4'>
                <p class='text-2xl font-bold'>About</p>
                <p class='text-sm pl-6'>
                  This is a drum stick finder. You can find your favorite drum sticks by maker, tip shape, and so on.
                </p>
                <p class='text-sm mt-4 pl-6'>
                  これはメーカーや先端の形状などから、お気に入りのドラムスティックを見つけることを目的としたツールです。
                </p>
                <p class='text-sm pl-6'>
                  <span>
                    """重さや塗装などは未記載"""なので、ここの情報だけを鵜呑みにせず、初見では必ず実物を触りましょう。<br></br>
                  </span>
                  <span>
                    また、個人の思いつきプロダクトのため、情報の精度も完全ではなく、データ数も足りないです（現在：{stickcount}本）。<br></br>
                  </span>
                  <span>元々、VicFirth SD2 Borelo の代わりになりそうな棒が存在しないか探すついでです。全てご了承ください。</span>
                </p>
              </div>
              <div class='p-4'>
                <p class='text-2xl font-bold'>Q&A</p>
                <p class='text-sm pl-6'>Q. 俺様のスティックがないんだけど</p>
                <p class='text-sm pl-6'>
                  A. 申し訳ない。手でちまちまやっているのだ。GitHub の Issue とかに情報先のURLと共に投げてくれるか、PRで足してくれると助かる。
                </p>
                <p class='text-sm mt-4 pl-6'>
                  Q. この●●ってスティックの内容が違う気がする
                </p>
                <p class='text-sm pl-6'>
                  A. これも申し訳ない。意外にびっくりするけど、メーカーによって公式の情報開示が雑だったりするのだ（最悪なケースだと画像を見て判断しろ的な）。Issueに正確な内容とそのソースを貼ってくれると助かる
                </p>
                <p class='text-sm mt-4 pl-6'>Q. 何もしてないのに壊れた</p>
                <p class='text-sm pl-6'>
                  <span>
                    A. ブラウザにキャッシュを取る作りになってて、こちらで機能やデータ構造を改修したりするとバグるかも。<br></br>
                  </span>
                  <span class='ml-5'>
                    画面内のリフレッシュボタンでキャッシュを消す処理が走る（はず）。<br></br>
                  </span>
                  <span class='ml-5'>それでも駄目だとブラウザの履歴・キャッシュ削除とかで消してみてほしい。</span>
                </p>
                <p class='text-sm mt-4 pl-6'>Q. この機能が壊れてる</p>
                <p class='text-sm pl-6'>
                  A. GitHub の Issue とかに詳細情報と共に投げてくれると助かる。 PRでもいいよ。
                </p>
                <p class='text-sm mt-4 pl-6'>
                  Q. クローリングとかしてデータ集めたらええやん など
                </p>
                <p class='text-sm pl-6'>
                  A. じゃあ怒られ前提でお前がやれ. 軽々しく迷惑行為をするな.
                </p>
                <p class='text-sm mt-4 pl-6'>
                  Q. 俺様が使ってやるからこの機能を作れ
                </p>
                <p class='text-sm pl-6'>
                  A. うるせ〜〜!!!!!知らね〜〜〜〜!!!!FINAL FANT<br></br>ASY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
