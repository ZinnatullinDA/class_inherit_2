import { Bowman } from '../Bowman.js';

describe('Bowman', () => {
  test('должен корректно создаваться', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman).toEqual({
      name: 'Legolas',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  describe('levelUp', () => {
    test('повышает уровень и характеристики', () => {
      const bowman = new Bowman('Robin');
      bowman.health = 80;
      bowman.levelUp();

      expect(bowman.level).toBe(2);
      expect(bowman.attack).toBeCloseTo(30);
      expect(bowman.defence).toBeCloseTo(30);
      expect(bowman.health).toBe(100);
    });

    test('ошибка при попытке повысить уровень мертвого персонажа', () => {
      const bowman = new Bowman('Dead');
      bowman.health = 0;
      expect(() => bowman.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  });

  describe('damage', () => {
    test('наносит урон с учётом защиты', () => {
      const bowman = new Bowman('Archer');
      bowman.damage(40);
      expect(bowman.health).toBe(70);
    });

    test('если здоровье уходит ниже 0 — становится 0', () => {
      const bowman = new Bowman('Robin');
      bowman.damage(500);
      expect(bowman.health).toBe(0);
    });

    test('не изменяет здоровье, если уже мертв', () => {
      const bowman = new Bowman('Ghost');
      bowman.health = 0;
      bowman.damage(100);
      expect(bowman.health).toBe(0);
    });
  });
});
