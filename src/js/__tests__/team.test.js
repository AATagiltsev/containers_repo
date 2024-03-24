import Team from '../team.js'
import Character from '../character.js'

const testTeam = new Team();
const char1 = new Character('Ivan', 'Human');
const char2 = new Character('Marya', 'Human');

test('Добавление персонажа', () => {
    testTeam.add(char1);
    expect(testTeam.toArray()).toEqual([{
        name: 'Ivan',
        type: 'Human',
        attack: null,
        defence: null,
        health: 100,
        level: 1,
    }]);
});

test('Дубликат персонажа', () => {
    expect(() => {
        testTeam.add(char1);
        testTeam.add(char1);
    }).toThrow(new Error('Дублирование!!!'));
});

test('Добавление двух и более персонажей', () => {
    testTeam.addAll(char1, char2);
    expect(testTeam.toArray()).toEqual([
        {
            name: 'Ivan',
            type: 'Human',
            attack: null,
            defence: null,
            health: 100,
            level: 1,
        },
        {
            name: 'Marya',
            type: 'Human',
            attack: null,
            defence: null,
            health: 100,
            level: 1,
        },
    ]);
});