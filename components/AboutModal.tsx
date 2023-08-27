export default function AboutModal() {
  return (
    <>
      <div id="modal_about" class="hidden target:block">
        <div class="block w-full h-full bg-black/70 fixed top-0 left-0">
          <a href="#" class="block w-full h-full cursor-default"></a>
          <div class="w-3/4 mx-auto mt-20 relative -top-full">
            <div class="bg-white rounded-lg shadow-lg">
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
                <p class="text-sm mt-4 pl-6">Q. この機能が壊れてる</p>
                <p class="text-sm pl-6">
                  A. GitHub の Issue とかに詳細情報と共に投げてくれると助かる。
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
