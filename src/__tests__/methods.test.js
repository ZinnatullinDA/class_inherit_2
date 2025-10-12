import { Character } from '../Character.js';

describe('Character methods', () => {
  test('levelUp increases stats and level', () => {
    const hero = new Character('Bob', 'Bowman');
    hero.attack = 25;
    hero.defence = 25;

    hero.levelUp();

    expect(hero.level).toBe(2);
    expect(hero.attack).toBeCloseTo(30);  // 25 * 1.2
    expect(hero.defence).toBeCloseTo(30); // 25 * 1.2
    expect(hero.health).toBe(100);
  });

  test('levelUp throws if health = 0', () => {
    const dead = new Character('Dead', 'Zombie');
    dead.health = 0;
    expect(() => dead.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('damage reduces health correctly', () => {
    const hero = new Character('Bob', 'Swordsman');
    hero.attack = 40;
    hero.defence = 10;
    hero.damage(50);
    expect(hero.health).toBeCloseTo(100 - 50 * (1 - 0.1)); // 100 - 45 = 55
  });

  test('damage does not reduce below 0', () => {
    const hero = new Character('Bob', 'Magician');
    hero.attack = 10;
    hero.defence = 10;
    hero.damage(1000);
    expect(hero.health).toBe(0);
  });

  test('damage on dead character does nothing', () => {
    const hero = new Character('Bob', 'Daemon');
    hero.health = 0;
    hero.damage(50);
    expect(hero.health).toBe(0);
  });
});
