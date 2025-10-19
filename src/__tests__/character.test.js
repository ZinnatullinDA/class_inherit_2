import { Character } from "../Character.js";

describe('Character', () => {
  test('должен корректно создавать персонажа', () => {
    const c = new Character('Bob', 'Bowman');
    expect(c).toEqual({
      name: 'Bob',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined,
    });
  });

  test('ошибка — имя слишком короткое', () => {
    expect(() => new Character('A', 'Bowman')).toThrow(
      'Имя введено не правильно'
    );
  });

  test('ошибка — имя слишком длинное', () => {
    expect(() => new Character('VeryLongNameHere', 'Bowman')).toThrow(
      'Имя введено не правильно'
    );
  });

  test('ошибка — имя не строка', () => {
    expect(() => new Character(123, 'Bowman')).toThrow(
      'Имя введено не правильно'
    );
  });

  test('ошибка — неверный тип', () => {
    expect(() => new Character('Bob', 'Ninja')).toThrow('Неправильный тип');
  });

  describe('levelUp', () => {
    test('повышает уровень и характеристики', () => {
      const c = new Character('Alice', 'Bowman');
      c.attack = 10;
      c.defence = 20;
      c.health = 50;

      c.levelUp();

      expect(c.level).toBe(2);
      expect(c.attack).toBeCloseTo(12);
      expect(c.defence).toBeCloseTo(24);
      expect(c.health).toBe(100);
    });

    test('ошибка — нельзя повысить уровень мёртвого персонажа', () => {
      const c = new Character('Alice', 'Bowman');
      c.health = 0;

      expect(() => c.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  });

  describe('damage', () => {
    test('наносит урон с учётом защиты', () => {
      const c = new Character('Bob', 'Bowman');
      c.defence = 20;
      c.damage(50);
      expect(c.health).toBe(60);
    });

    test('если здоровье уходит ниже 0, устанавливается 0', () => {
      const c = new Character('Bob', 'Bowman');
      c.defence = 0;
      c.damage(200);
      expect(c.health).toBe(0);
    });

    test('не изменяет здоровье, если уже мёртв', () => {
      const c = new Character('Bob', 'Bowman');
      c.health = 0;
      c.defence = 0;
      c.damage(50);
      expect(c.health).toBe(0);
    });
  });
});
