const MESSAGES = {
    COMMANDS: {
        COURS: {
            ABSENCE: {
                name: 'absence',
                aliases: ['abs'],
                category: 'cours',
                usage: '<prefix> [groupe]',
                args: true
            },
            APPEL: {
                name: 'appel',
                aliases: ['appel'],
                category: 'cours',
                usage: '',
                args: false
            },
            APPELFIN: {
                name: 'appelfin',
                aliases: ['appelfin'],
                category: 'cours',
                usage: '',
                args: false
            },
            CHECK: {
                name: 'check',
                aliases: ['check'],
                category: 'cours',
                usage: '',
                args: false
            },
            HISTORIQUE: {
                name: 'historique',
                aliases: ['historique'],
                category: 'cours',
                usage: '',
                args: false
            },
        },
        MISC: {
            PING: {
                name: 'ping',
                aliases: ['ping'],
                category: 'misc',
                usage: '',
                args: false
            },
            TEST: {
                name: 'test',
                aliases: ['test'],
                category: 'misc',
                usage: '',
                args: false
            }
        }
    }
}

exports.MESSAGES = MESSAGES;