import { Character } from "../Character.js";
import { Bowman } from '../Bowman.js';
import { Swordsman } from '../Swordsman.js';
import { Magician } from '../Magician.js';
import { Daemon } from '../Daemon.js';
import { Undead } from '../Undead.js';
import { Zombie } from '../Zombie.js';

describe('Character', () => {
  test('should create valid character', () => {
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

  test('should throw error for short name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
  });

  test('should throw error for long name', () => {
    expect(() => new Character('VeryLongNameHere', 'Bowman')).toThrow();
  });

  test('should throw error for invalid type', () => {
    expect(() => new Character('Bob', 'Ninja')).toThrow();
  });
});

describe('child classes', () => {
  test('Bowman sets attack and defence correctly', () => {
    const b = new Bowman('Robin');
    expect(b.attack).toBe(25);
    expect(b.defence).toBe(25);
    expect(b.type).toBe('Bowman');
  });

  test('Swordsman has correct values', () => {
    const s = new Swordsman('Hero');
    expect(s.attack).toBe(40);
    expect(s.defence).toBe(10);
    expect(s.health).toBe(100);
  });

  test('Magician has correct values', () => {
    const m = new Magician('Gandalf');
    expect(m.attack).toBe(10);
    expect(m.defence).toBe(40);
  });

  test('Daemon has correct values', () => {
    const d = new Daemon('Azazel');
    expect(d.attack).toBe(10);
    expect(d.defence).toBe(40);
  });

  test('Undead has correct values', () => {
    const u = new Undead('Skull');
    expect(u.attack).toBe(25);
    expect(u.defence).toBe(25);
  });

  test('Zombie has correct values', () => {
    const z = new Zombie('Rot');
    expect(z.attack).toBe(40);
    expect(z.defence).toBe(10);
  });
});
