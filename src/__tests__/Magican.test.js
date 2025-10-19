import { Magician } from '../Magician.js';

describe('Magician', () => {
  test('Правильно ли создаётся объект?', () => {
    const magic = new Magician('Gandalf');

    const correct = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Gandalf',
      type: 'Magician',
    };

    expect(magic).toEqual(correct);
  });

  describe('levelUp', () => {
    test('повышает уровень и характеристики', () => {
      const magic = new Magician('Merlin');
      magic.health = 60;
      magic.levelUp();

      expect(magic.level).toBe(2);
      expect(magic.attack).toBeCloseTo(12);
      expect(magic.defence).toBeCloseTo(48);
      expect(magic.health).toBe(100);
    });

    test('ошибка при попытке повысить уровень мертвого персонажа', () => {
      const magic = new Magician('Dead');
      magic.health = 0;
      expect(() => magic.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  });

  describe('damage', () => {
    test('наносит урон с учётом защиты', () => {
      const magic = new Magician('Saruman');
      magic.damage(50);
      expect(magic.health).toBe(70);
    });

    test('если здоровье уходит ниже 0 — становится 0', () => {
      const magic = new Magician('Radagast');
      magic.damage(500);
      expect(magic.health).toBe(0);
    });

    test('не изменяет здоровье, если уже мертв', () => {
      const magic = new Magician('Ghost');
      magic.health = 0;
      magic.damage(100);
      expect(magic.health).toBe(0);
    });
  });
});
