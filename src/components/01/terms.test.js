// testing terms json file for 01

import data from './data.json';
/* loops through data and ensures that our data has properties we expect this to have. 
 We are going to add a ton of data over the next week, which is very very prone to human error
 This way we can find silly errors way faster then trying to stare down the code */
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

        expect(term).toHaveProperty('mdn_link');
        expect(term.mdn_link).toEqual(expect.any(String));

        expect(term).toHaveProperty('how_to_search');
        expect(term.how_to_search).toEqual(expect.any(String));

    })
})