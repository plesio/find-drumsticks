export default function AboutModal() {
  return (
    <>
      <div id="modal_about" class="hidden target:block">
        <div class="block  w-full h-full bg-black/70 fixed top-0 left-0 overflow-y-auto">
          <a href="#" class="block w-full h-full cursor-default"></a>

          <div class="xs:max-w-xs md:w-full mx-auto lg:w-3/4 xs:p-4 md:px-4 lg:px-auto md:my-4 lg:my-10 relative -top-full">
            <div class="bg-white rounded-lg shadow-lg">
              <div class="absolute top-2 right-1/2">
                <button type="button" class="" aria-label="Close">
                  <a href="#" class="block w-full h-full cursor-default">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </button>
              </div>
              <div class="p-4">
                <p class="text-2xl font-bold">About</p>
                <p class="text-sm pl-6">
                  This is a drum stick finder. You can find your favorite drum
                  sticks by maker, tip shape, and so on.
                </p>
                <p class="text-sm mt-4 pl-6">
                  これはメーカーや先端の形状などから、お気に入りのドラムスティックを見つけることを目的としたツールです。
                </p>
                <p class="text-sm pl-6">
                  ドラムスティック自体のメタ情報だけを集めているので、実際に購入する際は各メーカーのサイトを参照してください。
                </p>
                <p class="text-sm pl-6">
                  また、見ての通り、個人の思いつきで作ったのでドラムスティックの情報は完全に正しいとは限りませんし、なんならデータ数が足りないです。ご了承ください。
                </p>
              </div>
              <div class="p-4">
                <p class="text-2xl font-bold">Q&A</p>
                <p class="text-sm pl-6">Q. 俺様のスティックがないんだけど</p>
                <p class="text-sm pl-6">
                  A. 申し訳ない。手でちまちまやっているのだ。GitHub の Issue
                  とかに詳細情報と共に投げてくれると助かる。
                </p>
                <p class="text-sm mt-4 pl-6">
                  Q. この●●ってスティックの内容が違う気がする
                </p>
                <p class="text-sm pl-6">
                  A.
                  これも申し訳ない。意外にびっくりするけど、公式でさえ情報がバラバラだったりするのだ。Issueに正確な内容とそのソースを貼ってくれると助かる
                </p>
                <p class="text-sm mt-4 pl-6">Q. 何もしてないのに壊れた</p>
                <p class="text-sm pl-6">
                  A.
                  ブラウザにキャッシュを取る作りになってて、こちらで機能やデータ構造を改修したりするとバグるかも。画面内のリフレッシュボタンでキャッシュを消す処理が走る（はず）。それでも駄目だとブラウザの履歴・キャッシュ削除とかで消してみてほしい。
                </p>
                <p class="text-sm mt-4 pl-6">Q. この機能が壊れてる</p>
                <p class="text-sm pl-6">
                  A. GitHub の Issue とかに詳細情報と共に投げてくれると助かる。
                  PRで直してくれてもいいよ。
                </p>
                <p class="text-sm mt-4 pl-6">
                  Q. クローリングとかしてデータ集めたらええやん など
                </p>
                <p class="text-sm pl-6">
                  A. じゃあ怒られ前提でお前がやれ. 軽々しく迷惑行為をするな.
                </p>
                <p class="text-sm mt-4 pl-6">
                  Q. 俺様が使ってやるからこの機能を作れ
                </p>
                <p class="text-sm pl-6">
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
