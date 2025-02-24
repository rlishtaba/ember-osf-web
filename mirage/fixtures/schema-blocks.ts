import SchemaBlock from 'ember-osf-web/models/schema-block';

const exampleSchema: Array<Partial<SchemaBlock>> = [
    {
        id: 'SB1',
        blockType: 'page-heading',
        displayText: 'First page of Test Schema',
        index: 0,
    },
    {
        id: 'SB2',
        blockType: 'section-heading',
        displayText: 'First section',
        index: 1,
    },
    {
        id: 'SB3',
        blockType: 'subsection-heading',
        displayText: 'Subsection',
        index: 2,
    },
    {
        id: 'SB4',
        blockType: 'question-label',
        displayText: 'What do cats like more?',
        schemaBlockGroupKey: 'q1',
        index: 3,
    },
    {
        id: 'SB5',
        blockType: 'single-select-input',
        registrationResponseKey: 'page-one_single-select',
        schemaBlockGroupKey: 'q1',
        index: 4,
    },
    {
        id: 'SB6',
        blockType: 'select-input-option',
        displayText: 'tuna',
        schemaBlockGroupKey: 'q1',
        index: 5,
    },
    {
        id: 'SB7',
        blockType: 'select-input-option',
        displayText: 'chicken',
        schemaBlockGroupKey: 'q1',
        index: 6,
    },
    {
        id: 'SB8',
        blockType: 'question-label',
        displayText: 'Which Pokemon is your favorite?',
        schemaBlockGroupKey: 'q2',
        index: 7,
    },
    {
        id: 'SB9',
        blockType: 'short-text-input',
        registrationResponseKey: 'page-one_short-text',
        schemaBlockGroupKey: 'q2',
        index: 8,
    },
    {
        id: 'SB10',
        blockType: 'question-label',
        displayText: 'What is the difference between a swamp and a marsh?',
        schemaBlockGroupKey: 'q3',
        index: 9,
    },
    {
        id: 'SB11',
        blockType: 'long-text-input',
        registrationResponseKey: 'page-one_long-text',
        schemaBlockGroupKey: 'q3',
        index: 10,
    },
    {
        id: 'SB12',
        blockType: 'question-label',
        displayText: 'I never understood all the hate for:',
        schemaBlockGroupKey: 'q4',
        index: 11,
    },
    {
        id: 'SB13',
        blockType: 'multi-select-input',
        registrationResponseKey: 'page-one_multi-select',
        schemaBlockGroupKey: 'q4',
        index: 12,
    },
    {
        id: 'SB14',
        blockType: 'select-input-option',
        displayText: 'Nickelback',
        schemaBlockGroupKey: 'q4',
        index: 13,
    },
    {
        id: 'SB15',
        blockType: 'select-input-option',
        displayText: 'Crocs',
        schemaBlockGroupKey: 'q4',
        index: 14,
    },
    {
        id: 'SB16',
        blockType: 'select-other-option',
        displayText: 'Other:',
        schemaBlockGroupKey: 'q4',
        index: 15,
    },
    {
        id: 'SB17',
        blockType: 'short-text-input',
        registrationResponseKey: 'page-one_multi-select-other',
        schemaBlockGroupKey: 'q5',
        index: 16,
    },
    {
        id: 'SB18',
        blockType: 'page-heading',
        displayText: 'This is the second page',
        index: 17,
    },
    {
        id: 'SB19',
        blockType: 'question-label',
        displayText: 'If I had a super power it would be:',
        schemaBlockGroupKey: 'q6',
        index: 18,
    },
    {
        id: 'SB20',
        blockType: 'single-select-input',
        registrationResponseKey: 'page-one_single-select-two',
        schemaBlockGroupKey: 'q6',
        index: 19,
    },
    {
        id: 'SB21',
        blockType: 'select-input-option',
        displayText: 'Always be on the proper beat while doing the macarena',
        schemaBlockGroupKey: 'q6',
        index: 20,
    },
    {
        id: 'SB22',
        blockType: 'select-input-option',
        displayText: 'Remember who was in NSync and who was in Backstreet Boys',
        schemaBlockGroupKey: 'q6',
        index: 21,
    },
    {
        id: 'SB23',
        blockType: 'select-other-option',
        displayText: 'Other',
        schemaBlockGroupKey: 'q6',
        index: 22,
    },
    {
        id: 'SB24',
        blockType: 'short-text-input',
        schemaBlockGroupKey: 'q6',
        index: 23,
    },
];

export const ids = exampleSchema.map(block => block.id);

export default exampleSchema;
