// testing terms json file for 01

import data from './terms.json';

test('JSON data has required properties and types', () => {
    data.forEach(term => {
        expect(term).toHaveProperty('term')
        expect(term.term).toEqual(expect.any(String));

        expect(term).toHaveProperty('formal_definition');
        expect(term.formal_definition).toEqual(expect.any(String));
        
        expect(term).toHaveProperty('simple_definition');
        expect(term.simple_definition).toEqual(expect.any(String));

        expect(term).toHaveProperty('w3_link');
        expect(term.w3_link).toEqual(expect.any(String));

        expect(term).toHaveProperty('md_link');
        expect(term.md_link).toEqual(expect.any(String));

        expect(term).toHaveProperty('how_to_search');
        expect(term.how_to_search).toEqual(expect.any(String));

    })
})