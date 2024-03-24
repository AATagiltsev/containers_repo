import Team from '../team.js'
import Character from '../character.js'


test('Добавление персонажа', () => {
    Team.add(Character);
    expect(Team.toArray()).toEqual([{
        name: 'Ivan',
        type: 'Human',
    }]);
});

test('Дубликат персонажа', () => {
    expect(() => {
        Team.add(Character);
        Team.add(Character);
    }).toThrow(new Error('Дублирование!!!'));
});

test('Добавление двух и более персонажей', () => {
    Team.addAll(Character, Character);
    expect(Team.toArray()).toEqual([
        {
            name: 'Ivan',
            type: 'Human'
        },
        {
            name: 'Marya',
            type: 'Human'
        },
    ]);
});