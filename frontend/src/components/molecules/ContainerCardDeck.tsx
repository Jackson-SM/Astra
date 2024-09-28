'use client';

import { CardDeck } from '@/components/atoms/CardDeck';
import { motion, Variants } from 'framer-motion';

export const ContainerCardDeck = () => {
  const variantList: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const decks = [
    {
      deck: { title: 'Food' },
      words: [
        { type: 'subs.', word: 'Apfel' },
        { type: 'subs.', word: 'Brot' },
        { type: 'subs.', word: 'Milch' },
        { type: 'subs.', word: 'Wasser' },
      ],
    },
    {
      deck: { title: 'Essencial Verbs' },
      words: [
        { type: 'verb', word: 'essen' },
        { type: 'verb', word: 'gehen' },
        { type: 'verb', word: 'haben' },
        { type: 'verb', word: 'machen' },
        { type: 'verb', word: 'sprechen' },
        { type: 'verb', word: 'trinken' },
        { type: 'verb', word: 'wohnen' },
      ],
    },
    {
      deck: { title: 'Objects' },
      words: [
        { type: 'subs.', word: 'Auto' },
        { type: 'subs.', word: 'Buch' },
        { type: 'subs.', word: 'Haus' },
        { type: 'subs.', word: 'Stuhl' },
        { type: 'subs.', word: 'Tisch' },
      ],
    },
    {
      deck: { title: 'Pronouns' },
      words: [
        { type: 'pron.', word: 'du' },
        { type: 'pron.', word: 'er' },
        { type: 'pron.', word: 'es' },
        { type: 'pron.', word: 'sie' },
        { type: 'pron.', word: 'wir' },
        { type: 'pron.', word: 'ihr' },
      ],
    },
    {
      deck: { title: 'To Be Verb' },
      words: [
        { type: 'verb', word: 'bin' },
        { type: 'verb', word: 'bist' },
        { type: 'verb', word: 'ist' },
        { type: 'verb', word: 'sind' },
        { type: 'verb', word: 'seid' },
      ],
    },
  ];

  return (
    <motion.ul
      className="grid-cols-auto-fill grid place-items-center"
      variants={variantList}
      initial="hidden"
      animate="show"
    >
      {decks.map((deck, index) => {
        return (
          <CardDeck
            key={index}
            deck={deck.deck}
            words={deck.words}
            className=""
          />
        );
      })}
    </motion.ul>
  );
};
