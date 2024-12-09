type ExibicaoTuplaType = [string, string, string, AnimaisTuplaType[]];
type AnimaisTuplaType = [string, string, number, boolean];

const EXIBICOES: ExibicaoTuplaType[] = [
    [
        "A1",
        "2024-12-02T08:00-03:00",
        "2024-12-02T12:00-03:00",
        [
            ["🦁", "Leão", 0, true],
            ["🦒", "Girafa", 1200, true],
            ["🦩", "Flamingo", 12.0, true],
        ],
    ],
    [
        "B2",
        "2024-12-02T14:00-03:00",
        "2024-12-02T16:00-03:00",
        [["🦜", "Papagaio", 0.12, false]],
    ],
];

export default EXIBICOES;
