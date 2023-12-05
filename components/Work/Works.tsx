import { Tile } from '../Tiles/Tile';
import TileBackground from '../Tiles/TileBackground';
import { TileContent } from '../Tiles/TileContent';
import TileWrapper from '../Tiles/TileWrapper';
import { WorkBackground } from './WorkBackground';
import WorkContent from './WorkContent';
import { workTiles } from './workTiles';
import { FaArrowRight } from "react-icons/fa6";

export default function Works() {
  return (
    <>
      <TileWrapper numOfPages={workTiles.length}>
        <TileBackground>
          <WorkBackground />
        </TileBackground>
        <TileContent>
          {workTiles.map((work, i) => (
            <Tile page={i} key={work.title}>
              <WorkContent work={work} />
            </Tile>
          ))}
        </TileContent>
      </TileWrapper>
      <div className='pl-10 pt-5 text-2xl flex items-center gap-5  mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0' >
        View All Projects <FaArrowRight />
      </div>
    </>
  );
}
