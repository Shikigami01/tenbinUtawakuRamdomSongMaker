import { SongSlot } from './components/SongSlot';
import { Title } from './components/Title';
import songList1 from '../assets/json/songList1.json';
import songList2 from '../assets/json/songList2.json';
import songList3 from '../assets/json/songList3.json';
import songList4 from '../assets/json/songList4.json';
// import githubLogo from '/images/icon_github.svg';

const jsonAll: string[] = [];
jsonAll.push(...songList1, ...songList2, ...songList3, ...songList4);

const App: React.FunctionComponent = () => {
  return (
    <>
      <main className="mt-4 mx-2 mb-12">
        <section className="mb-12 mx-auto max-w-3xl">
          <Title>全ての中から1つを選ぶ</Title>
          <SongSlot data={jsonAll} />
        </section>
        <section className="mb-12 mx-auto max-w-3xl">
          <Title>アニメ・声優さん・Vさん・インターネット活動者の曲</Title>
          <SongSlot data={songList1} />
        </section>
        <section className="mb-12 mx-auto max-w-3xl">
          <Title>ボカロP、UTAU、CeVIO曲</Title>
          <SongSlot data={songList2} />
        </section>
        <section className="mb-12 mx-auto max-w-3xl">
          <Title>アイドル曲</Title>
          <SongSlot data={songList3} />
        </section>
        <section className="mb-12 mx-auto max-w-3xl">
          <Title>ほかインターネットの曲とかJPOPとか</Title>
          <SongSlot data={songList4} />
        </section>
        <section className="mx-auto max-w-5xl">
          <p className="text-center text-xs">最終確認・更新日:2023/12/19</p>
        </section>
      </main>
      <footer className="text-center text-xs py-4 bg-gray-600 text-white">
        <ul className="flex justify-center items-center mb-4">
          <li className="w-8 h-auto mr-2">
            <a
              href="https://github.com/Shikigami01/tenbinUtawakuRamdomSongMaker"
              className="w-full h-auto"
            >
              <img
                src="/images/icon_github.svg"
                alt="このプロジェクトのgithub"
                className="block w-full h-auto"
              />
            </a>
          </li>
          <li className="w-8 h-auto ml-2">
            <a href="https://twitter.com/HouraijiN" className="w-full h-auto">
              <img
                src="/images/icon_twitter.svg"
                alt="敷き紙のtwitter"
                className="block w-full h-auto"
              />
            </a>
          </li>
        </ul>
        <p>&copy; 2023 敷き紙</p>
      </footer>
    </>
  );
};

export default App;
