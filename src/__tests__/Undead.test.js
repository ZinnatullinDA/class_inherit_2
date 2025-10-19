import { Undead } from '../Undead.js';

describe('Undead', () => {
  test('Правильно ли создаётся объект?', () => {
    const undead = new Undead('Skull');

    const correct = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Skull',
      type: 'Undead',
    };

    expect(undead).toEqual(correct);
  });

  describe('levelUp', () => {
    test('повышает уровень и характеристики', () => {
      const undead = new Undead('Bone');
      undead.health = 50;
      undead.levelUp();

      expect(undead.level).toBe(2);
      expect(undead.attack).toBeCloseTo(30);
      expect(undead.defence).toBeCloseTo(30);
      expect(undead.health).toBe(100);
    });

    test('ошибка при попытке повысить уровень мертвого персонажа', () => {
      const undead = new Undead('Dead');
      undead.health = 0;
      expect(() => undead.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  });

  describe('damage', () => {
    test('наносит урон с учётом защиты', () => {
      const undead = new Undead('Zombie');
      undead.damage(40);
      expect(undead.health).toBe(70);
    });

    test('если здоровье уходит ниже 0 — становится 0', () => {
      const undead = new Undead('Ghoul');
      undead.damage(500);
      expect(undead.health).toBe(0);
    });

    test('не изменяет здоровье, если уже мертв', () => {
      const undead = new Undead('Ghost');
      undead.health = 0;
      undead.damage(100);
      expect(undead.health).toBe(0);
    });
  });
});
