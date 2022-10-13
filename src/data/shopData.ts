import bluetooth from "./bluetoothHeadphones";
import headphones from "./headphones";
import GoodsGroup from "./interfaces/IGoodsGroup";

let shopData = [
  {
    title: 'Наушники',
    content: headphones,
  },
  {
    title: 'Беспроводные наушники',
    content: bluetooth
  }
] as Array<GoodsGroup>

export default shopData;