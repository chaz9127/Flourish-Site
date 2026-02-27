'use client';

import { useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';

const ELIGIBLE_PLANTS = [
  'apple_tree_3', 'apple_tree_4', 'apple_tree_5',
  'banana_tree_3', 'banana_tree_4', 'banana_tree_5',
  'coconut_tree_3', 'coconut_tree_4', 'coconut_tree_5',
  'lemon_tree_3', 'lemon_tree_4', 'lemon_tree_5',
  'plum_tree_3', 'plum_tree_4', 'plum_tree_5',
];

const TREE_WIDTH = 52;
const TREE_HEIGHT = 66;
const CONTAINER_HEIGHT = 200;
const TREE_COUNT = 10;
const MIDPOINT_COUNT = 6; 
const TOP_COUNT = 4;

interface TreeData {
  src: string;
  left: number; // percent
  top: number;  // px
}

function buildTrees(): TreeData[] {
  // Shuffle eligible plants and pick 10
  const shuffled = [...ELIGIBLE_PLANTS].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, TREE_COUNT);

  // Assign vertical positions: 6 midpoint, 4 top-25%
  const positions: number[] = [];
  for (let i = 0; i < MIDPOINT_COUNT; i++) {
    // Center tree around 40% of container: top = 40% - half tree height ± small jitter
    const midpoint = CONTAINER_HEIGHT * 0.4 - TREE_HEIGHT / 2;
    positions.push(midpoint + (Math.random() - 0.4) * 20);
  }
  for (let i = 0; i < TOP_COUNT; i++) {
    // Center tree in top 40%: top = 0 to (40% of container - tree height)
    const maxTop = CONTAINER_HEIGHT * 0.4 - TREE_HEIGHT / 2;
    positions.push(Math.max(0, Math.random() * maxTop));
  }

  // Shuffle positions so midpoint/top trees are mixed across horizontal slots
  positions.sort(() => Math.random() - 0.5);

  // Distribute horizontally: divide into TREE_COUNT slots, randomize within each
  const slotWidth = 100 / TREE_COUNT;
  return picked.map((name, i) => ({
    src: `/icons/plants/${name}.png`,
    left: slotWidth * i + Math.random() * slotWidth * 0.6,
    top: positions[i],
  }));
}

const emptyTrees: TreeData[] = [];
const noSubscribe = () => () => {};

export default function GrassFooter() {
  const treesRef = useRef<TreeData[] | null>(null);

  const trees = useSyncExternalStore(
    noSubscribe,
    () => {
      if (!treesRef.current) treesRef.current = buildTrees();
      return treesRef.current;
    },
    () => emptyTrees,
  );

  return (
    <div className="fixed bottom-0 left-0 w-full h-50 bg-[url('/icons/grass_floor.png')] bg-repeat-x bg-bottom bg-size-[auto_160px]">
      {trees.map((tree: TreeData, i: number) => (
        <Image
          key={i}
          src={tree.src}
          alt={tree.src.split('/').pop()?.replace('.png', '').replace(/_/g, ' ') ?? 'tree'}
          width={TREE_WIDTH}
          height={TREE_HEIGHT}
          className="absolute object-contain"
          style={{ left: `${tree.left}%`, top: `${tree.top}px` }}
        />
      ))}
    </div>
  );
}
