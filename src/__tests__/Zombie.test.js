import { Zombie } from '../Zombie.js';

describe('Zombie', () => {
  test('Правильно ли создаётся объект?', () => {
    const zomb = new Zombie('Rot');

    const correct = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Rot',
      type: 'Zombie',
    };

    expect(zomb).toEqual(correct);
  });

  describe('levelUp', () => {
    test('повышает уровень и характеристики', () => {
      const zomb = new Zombie('Walker');
      zomb.health = 70;
      zomb.levelUp();

      expect(zomb.level).toBe(2);
      expect(zomb.attack).toBeCloseTo(48);
      expect(zomb.defence).toBeCloseTo(12);
      expect(zomb.health).toBe(100);
    });

    test('ошибка при попытке повысить уровень мертвого персонажа', () => {
      const zomb = new Zombie('Dead');
      zomb.health = 0;
      expect(() => zomb.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  });

  describe('damage', () => {
    test('наносит урон с учётом защиты', () => {
      const zomb = new Zombie('Crawler');
      zomb.damage(50);
      expect(zomb.health).toBe(55);
    });

    test('если здоровье уходит ниже 0 — становится 0', () => {
      const zomb = new Zombie('Rotten');
      zomb.damage(500);
      expect(zomb.health).toBe(0);
    });

    test('не изменяет здоровье, если уже мертв', () => {
      const zomb = new Zombie('Ghost');
      zomb.health = 0;
      zomb.damage(100);
      expect(zomb.health).toBe(0);
    });
  });
});
