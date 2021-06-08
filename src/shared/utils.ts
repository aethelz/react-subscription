import type { InternalCardData, CardData } from './types';

export function cardDataToInternal(data: CardData): InternalCardData {
  return {
    ...data,
    cardHolder: 'CARD HOLDER',
    isCardFlipped: false,
  };
}
