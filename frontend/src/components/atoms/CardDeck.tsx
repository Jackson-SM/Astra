'use client';

import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import Link from 'next/link';

type WordsType = {
  type: string;
  word: string;
};

type CardDeckTypes = {
  title: string;
};

type CardWordProps = HTMLMotionProps<'li'> & {
  words: WordsType[];
  deck: CardDeckTypes;
};

export const CardDeck = ({
  words,
  deck,
  className,
  ...props
}: CardWordProps) => {
  const cardDeckVariant: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.li
      variants={cardDeckVariant}
      className={cn('m-2 h-40 w-80', className)}
      {...props}
    >
      <Link
        href="/words"
        className="flex h-full w-full flex-col justify-between gap-2 rounded-md bg-card p-2 text-card-foreground transition-colors duration-100 hover:bg-accent"
      >
        <div>
          <h1 className="text-xl">{deck.title}</h1>
        </div>
        <div>
          <p className="text-xs text-card-foreground/70">
            {words.length} words
          </p>
        </div>
      </Link>
    </motion.li>
  );
};
