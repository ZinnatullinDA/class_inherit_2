import { Swordsman } from '../Swordsman.js';

describe('Swordsman', () => {
  test('Правильно ли создаётся объект?', () => {
    const swordsman = new Swordsman('Hero');

    const correct = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Hero',
      type: 'Swordsman',
    };

    expect(swordsman).toEqual(correct);
  });

  describe('levelUp', () => {
    test('повышает уровень и характеристики', () => {
      const swordsman = new Swordsman('Arthur');
      swordsman.health = 70;
      swordsman.levelUp();

      expect(swordsman.level).toBe(2);
      expect(swordsman.attack).toBeCloseTo(48);
      expect(swordsman.defence).toBeCloseTo(12);
      expect(swordsman.health).toBe(100);
    });

    test('ошибка при попытке повысить уровень мертвого персонажа', () => {
      const swordsman = new Swordsman('Dead');
      swordsman.health = 0;
      expect(() => swordsman.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  });

  describe('damage', () => {
    test('наносит урон с учётом защиты', () => {
      const swordsman = new Swordsman('Fighter');
      swordsman.damage(50);
      expect(swordsman.health).toBe(55);
    });

    test('если здоровье уходит ниже 0 — становится 0', () => {
      const swordsman = new Swordsman('Knight');
      swordsman.damage(500);
      expect(swordsman.health).toBe(0);
    });

    test('не изменяет здоровье, если уже мертв', () => {
      const swordsman = new Swordsman('Ghost');
      swordsman.health = 0;
      swordsman.damage(100);
      expect(swordsman.health).toBe(0);
    });
  });
});
