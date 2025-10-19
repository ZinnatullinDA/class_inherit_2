import { Daemon } from '../Daemon.js';

describe('Daemon', () => {
  test('Правильно ли создаётся объект?', () => {
    const daemon = new Daemon('Azazel');

    const correct = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Azazel',
      type: 'Daemon',
    };

    expect(daemon).toEqual(correct);
  });

  describe('levelUp', () => {
    test('повышает уровень и характеристики', () => {
      const daemon = new Daemon('Lucifer');
      daemon.health = 80;
      daemon.levelUp();

      expect(daemon.level).toBe(2);
      expect(daemon.attack).toBeCloseTo(12);
      expect(daemon.defence).toBeCloseTo(48);
      expect(daemon.health).toBe(100);
    });

    test('ошибка при попытке повысить уровень мертвого персонажа', () => {
      const daemon = new Daemon('Dead');
      daemon.health = 0;
      expect(() => daemon.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  });

  describe('damage', () => {
    test('наносит урон с учётом защиты', () => {
      const daemon = new Daemon('Doom');
      daemon.damage(50);
      expect(daemon.health).toBe(70);
    });

    test('если здоровье уходит ниже 0 — становится 0', () => {
      const daemon = new Daemon('Inferno');
      daemon.damage(500);
      expect(daemon.health).toBe(0);
    });

    test('не изменяет здоровье, если уже мертв', () => {
      const daemon = new Daemon('Ghost');
      daemon.health = 0;
      daemon.damage(100);
      expect(daemon.health).toBe(0);
    });
  });
});
